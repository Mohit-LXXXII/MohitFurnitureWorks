'use client'

import { useState, useEffect } from 'react'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  const slides = [
    {
      id: 1,
      image: '/furniture-1.jpg',
      title: 'Modern wardrobes',
      description: 'Sculpted storage with a clean, premium finish.'
    },
    {
      id: 2,
      image: '/furniture-2.jpg',
      title: 'Custom dressing units',
      description: 'Balanced design that makes daily routines feel elevated.'
    },
    {
      id: 3,
      image: '/furniture-3.jpg',
      title: 'Bedroom essentials',
      description: 'A warm, restful setup built for comfort and style.'
    },
    {
      id: 4,
      image: '/furniture-4.jpg',
      title: 'Statement doors',
      description: 'Durable finishes with refined architectural detailing.'
    },
    {
      id: 5,
      image: '/furniture-5.jpg',
      title: 'Modular kitchens',
      description: 'Smart layouts that blend function with beauty.'
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length, mounted])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  if (!mounted) return null

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfd3] bg-[#efe8e1] shadow-[0_30px_80px_rgba(60,45,35,0.09)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1a18]/55 via-[#1d1a18]/5 to-transparent" />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#2a241f] shadow-md backdrop-blur-sm transition hover:bg-white"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#2a241f] shadow-md backdrop-blur-sm transition hover:bg-white"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-5 z-10 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-sm uppercase">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-[#e3d8ce] bg-[#fffdfb]/90 p-5 sm:p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1d1b19] md:text-2xl">
              {slides[currentSlide].title}
            </h3>
            <p className="mt-1 text-sm text-[#655d59] md:text-base">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-[#b77a47]' : 'w-2.5 bg-[#d7c9bb] hover:bg-[#c0a892]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
