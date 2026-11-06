'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#eae0d5] bg-[#faf6f2]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b77845] to-[#4f3424] shadow-[0_12px_24px_rgba(129,85,45,0.2)]">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-[-0.04em] text-[#1f1c1a]">Mohit</h1>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8a6c53]">Furniture Works</p>
          </div>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {['Home', 'About', 'Products', 'Services', 'Reviews', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item === 'Home' ? 'home' : item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase() === 'contact' ? 'contact' : item.toLowerCase()}`}
                className="text-sm font-medium text-[#4d4743] hover:text-[#8b5c3a]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+919784268425" className="btn-secondary">
            Call Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2d8cf] bg-white/80 md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#ece2d8] bg-white/95 px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {['Home', 'About', 'Products', 'Services', 'Reviews', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item === 'Home' ? 'home' : item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase() === 'contact' ? 'contact' : item.toLowerCase()}`}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[#4d4743] hover:bg-[#f7efe8] hover:text-[#895b3d]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
