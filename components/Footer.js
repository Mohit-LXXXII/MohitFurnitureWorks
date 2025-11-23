export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-bold">Mohit</h3>
                <p className="text-xs text-purple-400">Furniture Works</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium quality furniture and expert craftsmanship for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition">Custom Design</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Repair & Restoration</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Delivery & Installation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Nankya Kheda, Makhupura, Ajmer, Rajasthan</span>
              </li>
              <li>
                <a href="tel:+919784268425" className="flex items-center gap-2 hover:text-blue-400 transition">
                  <span>📞</span>
                  <span>+91 9784268425</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 mb-12">
          <h4 className="font-bold text-lg mb-4">Working Hours</h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-300">Monday - Friday</p>
              <p className="font-semibold text-blue-300">9:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-gray-300">Saturday</p>
              <p className="font-semibold text-blue-300">10:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="text-gray-300">Sunday</p>
              <p className="font-semibold text-blue-300">11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mohit Furniture Works. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
