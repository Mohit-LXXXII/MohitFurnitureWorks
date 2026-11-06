export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#171412] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d29a68] to-[#6f4d37] font-bold text-white">
                M
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mohit</h3>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d1b39b]">Furniture Works</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#d7cbc3]">
              Premium furniture and custom craftsmanship designed to improve the way you live.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#d7cbc3]">
              {['Home', 'About', 'Products', 'Services'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`} className="transition hover:text-[#f0caa1]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold text-white">Services</h4>
            <ul className="space-y-3 text-sm text-[#d7cbc3]">
              {['Custom Design', 'Repair & Restoration', 'Delivery & Installation', 'Consultation'].map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-[#f0caa1]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#d7cbc3]">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Nankya Kheda, Makhupura, Ajmer, Rajasthan</span>
              </li>
              <li>
                <a href="tel:+919784268425" className="flex items-center gap-2 transition hover:text-[#f0caa1]">
                  <span>📞</span>
                  <span>+91 9784268425</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12 rounded-[1.5rem] border border-[#352d29] bg-[linear-gradient(135deg,#211c1a_0%,#2d241f_100%)] p-6 md:p-8">
          <h4 className="mb-5 text-lg font-semibold text-white">Working Hours</h4>
          <div className="grid gap-6 text-sm md:grid-cols-3">
            <div>
              <p className="text-[#d2c5bb]">Monday - Friday</p>
              <p className="mt-1 font-semibold text-[#f0caa1]">9:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-[#d2c5bb]">Saturday</p>
              <p className="mt-1 font-semibold text-[#f0caa1]">10:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="text-[#d2c5bb]">Sunday</p>
              <p className="mt-1 font-semibold text-[#f0caa1]">11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#312927] pt-8 text-sm text-[#d7cbc3] md:flex-row">
          <p>© {currentYear} Mohit Furniture Works. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-[#f0caa1]">Privacy Policy</a>
            <span className="text-[#716a65]">|</span>
            <a href="#" className="transition hover:text-[#f0caa1]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
