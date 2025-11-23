'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Mohit</h1>
            <p className="text-xs text-purple-600">Furniture Works</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500 font-medium">About</a></li>
          <li><a href="#products" className="text-gray-700 hover:text-blue-500 font-medium">Products</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-500 font-medium">Services</a></li>
          <li><a href="#testimonials" className="text-gray-700 hover:text-blue-500 font-medium">Reviews</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a></li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="space-y-3">
            <li><a href="#home" className="text-gray-700 hover:text-blue-500 block">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-500 block">About</a></li>
            <li><a href="#products" className="text-gray-700 hover:text-blue-500 block">Products</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-blue-500 block">Services</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-blue-500 block">Reviews</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-500 block">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
