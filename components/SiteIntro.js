'use client'

import { useEffect, useState } from 'react'
import MfwGlassReveal from './ui/mfw-glass-reveal'

export default function SiteIntro() {
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    if (!isMounted) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

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
      document.body.style.overflow = previousOverflow
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
