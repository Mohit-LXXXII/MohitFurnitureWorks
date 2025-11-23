'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Sample images - replace these with your actual image paths
  const slides = [
    {
      id: 1,
      image: '/furniture-1.jpg',
      title: 'Modern Cabinets',
      description: 'Premium storage for your living room'
    },
    {
      id: 2,
      image: '/furniture-2.jpg',
      title: 'Dressing Mirror',
      description: 'Elegant experience'
    },
    {
      id: 3,
      image: '/furniture-3.jpg',
      title: 'Bedroom Collection',
      description: 'Restful and stylish bedrooms'
    },
    {
      id: 4,
      image: '/furniture-4.jpg',
      title: 'Wooden Doors',
      description: 'Professional workspace solutions'
    },
    {
      id: 5,
      image: '/furniture-5.jpg',
      title: 'Modular Kitchen',
      description: 'Tailored to your needs'
    }
  ]

  // Mount component
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!mounted) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [slides.length, mounted])

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!mounted) {
    return null
  }

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Container */}
        <div className="relative w-full">
          {/* Slides */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-300 hover:shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-300 hover:shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 w-8'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Slide Info */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 text-lg">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
    </section>
  )
}
