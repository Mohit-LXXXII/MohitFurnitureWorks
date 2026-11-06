'use client'

import { useEffect, useRef, useState } from 'react'
import MfwGlassReveal from './ui/mfw-glass-reveal'

function playGrandRevealSound(context) {
  const start = context.currentTime
  const master = context.createGain()
  master.gain.setValueAtTime(0.0001, start)
  master.gain.linearRampToValueAtTime(0.72, start + 0.18)
  master.gain.exponentialRampToValueAtTime(0.0001, start + 2.8)
  master.connect(context.destination)

  const padFilter = context.createBiquadFilter()
  padFilter.type = 'lowpass'
  padFilter.frequency.setValueAtTime(500, start)
  padFilter.frequency.exponentialRampToValueAtTime(1800, start + 1.8)
  padFilter.connect(master)

  const padFrequencies = [130.81, 196, 261.63]
  padFrequencies.forEach((frequency, index) => {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = index === 0 ? 'triangle' : 'sine'
    oscillator.frequency.setValueAtTime(frequency, start)
    oscillator.frequency.linearRampToValueAtTime(frequency * 1.015, start + 2.4)
    gain.gain.setValueAtTime(index === 0 ? 0.17 : 0.1, start)
    oscillator.connect(gain)
    gain.connect(padFilter)
    oscillator.start(start)
    oscillator.stop(start + 2.85)
  })

  const noiseBuffer = context.createBuffer(1, context.sampleRate * 1.8, context.sampleRate)
  const noiseData = noiseBuffer.getChannelData(0)
  for (let index = 0; index < noiseData.length; index += 1) {
    noiseData[index] = (Math.random() * 2 - 1) * (1 - index / noiseData.length)
  }

  const whoosh = context.createBufferSource()
  const whooshFilter = context.createBiquadFilter()
  const whooshGain = context.createGain()
  whoosh.buffer = noiseBuffer
  whooshFilter.type = 'lowpass'
  whooshFilter.frequency.setValueAtTime(350, start)
  whooshFilter.frequency.exponentialRampToValueAtTime(2400, start + 1.5)
  whooshGain.gain.setValueAtTime(0.0001, start)
  whooshGain.gain.linearRampToValueAtTime(0.12, start + 0.7)
  whooshGain.gain.exponentialRampToValueAtTime(0.0001, start + 1.8)
  whoosh.connect(whooshFilter)
  whooshFilter.connect(whooshGain)
  whooshGain.connect(master)
  whoosh.start(start)
  whoosh.stop(start + 1.85)

  const chimeNotes = [
    [523.25, 0.35],
    [659.25, 0.58],
    [783.99, 0.82],
    [1046.5, 1.1],
  ]
  chimeNotes.forEach(([frequency, offset]) => {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const noteStart = start + offset
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, noteStart)
    gain.gain.setValueAtTime(0.0001, noteStart)
    gain.gain.linearRampToValueAtTime(0.13, noteStart + 0.025)
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.05)
    oscillator.connect(gain)
    gain.connect(master)
    oscillator.start(noteStart)
    oscillator.stop(noteStart + 1.1)
  })
}

export default function SiteIntro() {
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)
  const audioContextRef = useRef(null)
  const soundPlayingRef = useRef(false)
  const hasStartedSoundRef = useRef(false)

  useEffect(() => {
    if (!isMounted) return

    let isActive = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const removeAudioUnlockListeners = () => {
      window.removeEventListener('pointerdown', startSound)
      window.removeEventListener('keydown', startSound)
    }

    const startSound = () => {
      if (!isActive || hasStartedSoundRef.current) return

      try {
        const AudioContext = window.AudioContext
        if (!AudioContext) {
          console.error('The Web Audio API is not supported in this browser.')
          return
        }

        if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
          audioContextRef.current = new AudioContext()
        }

        const context = audioContextRef.current
        const playWhenReady = () => {
          if (!isActive || hasStartedSoundRef.current || context.state !== 'running') return

          hasStartedSoundRef.current = true
          soundPlayingRef.current = true
          removeAudioUnlockListeners()
          try {
            playGrandRevealSound(context)

            window.setTimeout(() => {
              soundPlayingRef.current = false
              if (context.state !== 'closed') {
                context.close().catch((error) => {
                  console.error('Unable to close the intro audio context.', error)
                })
              }
              if (audioContextRef.current === context) {
                audioContextRef.current = null
              }
            }, 3100)
          } catch (error) {
            soundPlayingRef.current = false
            console.error('Unable to create the intro sound.', error)
            context.close().catch((closeError) => {
              console.error('Unable to close the intro audio context.', closeError)
            })
            audioContextRef.current = null
          }
        }

        if (context.state === 'running') {
          playWhenReady()
        } else {
          context.resume().then(playWhenReady).catch((error) => {
            if (isActive && error.name !== 'NotAllowedError' && context.state !== 'closed') {
              console.error('Unable to start the intro sound.', error)
            }
          })
        }
      } catch (error) {
        console.error('Unable to start the intro sound.', error)
      }
    }

    window.addEventListener('pointerdown', startSound)
    window.addEventListener('keydown', startSound)
    startSound()

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const introDuration = prefersReducedMotion ? 1600 : 3700
    const fadeDuration = 500
    const fadeTimer = window.setTimeout(() => setIsFading(true), introDuration)
    const unmountTimer = window.setTimeout(
      () => setIsMounted(false),
      introDuration + fadeDuration,
    )

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(unmountTimer)
      removeAudioUnlockListeners()
      document.body.style.overflow = previousOverflow
      isActive = false
      if (!soundPlayingRef.current && audioContextRef.current && audioContextRef.current.state !== 'closed') {
        const context = audioContextRef.current
        audioContextRef.current = null
        context.close().catch((error) => {
          console.error('Unable to close the intro audio context.', error)
        })
      }
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div
      role="status"
      aria-label="Mohit Furniture Works"
      className={`fixed inset-0 z-[100] flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#f6f1eb] transition-opacity duration-500 ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 42%, rgba(183,122,71,0.12), transparent 38%)',
      }}
    >
      <MfwGlassReveal
        className="h-64 w-64 sm:h-72 sm:w-72"
        loop={false}
        background="#f6f1eb"
        plateColor="#fffdfb"
        logoColor="#81552d"
      />
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#81552d]">
        Mohit Furniture Works
      </p>
    </div>
  )
}
