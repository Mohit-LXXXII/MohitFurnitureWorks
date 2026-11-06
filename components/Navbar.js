'use client'

import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuDialogRef = useRef(null)

  useEffect(() => {
    const dialog = menuDialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

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
          {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item) => (
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
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
            <span className="block h-0.5 w-5 rounded-full bg-[#2a241f]"></span>
          </div>
        </button>
      </nav>

      <dialog
        ref={menuDialogRef}
        id="mobile-menu"
        aria-labelledby="mobile-menu-title"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-[#1f1c1a] backdrop:bg-[#211a16]/45 md:hidden"
        onClose={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false)
        }}
      >
        <div className="flex min-h-full items-start justify-center px-4 pt-20 sm:items-center sm:pt-0">
          <div className="w-full max-w-sm rounded-[2rem] border border-[#e8dfd6] bg-[#fffdfb] p-5 shadow-[0_24px_70px_rgba(33,26,22,0.22)]">
            <div className="mb-4 flex items-center justify-between border-b border-[#e8dfd6] pb-4">
              <p id="mobile-menu-title" className="text-sm font-semibold tracking-wide text-[#81552d]">Explore</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2d8cf] bg-white text-xl text-[#4d4743]"
                aria-label="Close menu"
                autoFocus
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <ul className="space-y-1">
              {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === 'Home' ? 'home' : item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase() === 'contact' ? 'contact' : item.toLowerCase()}`}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-[#4d4743] hover:bg-[#f7efe8] hover:text-[#895b3d]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:+919784268425" className="btn-primary mt-4 w-full">
              Call Now
            </a>
          </div>
        </div>
      </dialog>
    </header>
  )
}
