'use client'

import Slider from './Slider'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-white via-blue-50 to-purple-50 pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Quality Furniture for
                <span className="gradient-text"> Every Home</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium handcrafted furniture, custom woodwork, and professional repair services. Transform your space with elegance and comfort.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.google.com/maps/search/Mohit+Furniture+Works"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                📍 Visit Us
              </a>
              <a
                href="tel:+919784268425"
                className="btn-secondary text-center"
              >
                📞 Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200 mt-8">
              <div>
                <p className="text-2xl font-bold text-blue-600">25+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">1000+</p>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">100%</p>
                <p className="text-gray-600 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <Slider />
        </div>
      </div>
    </section>
  )
}
