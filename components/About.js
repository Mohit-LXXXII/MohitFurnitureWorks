export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/mohit-furniture.webp"
              alt="Mohit Furniture Works Showroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="section-title">About Mohit Furniture Works</h2>
              <p className="section-subtitle">
                Crafting Dreams into Reality Since 2004
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to Mohit Furniture Works, where tradition meets contemporary design. With over 25 years of experience, we've been serving the community with premium furniture solutions and exceptional craftsmanship.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Our team of expert craftsmen creates bespoke furniture pieces tailored to your unique style and needs. From residential to commercial projects, we pride ourselves on quality, durability, and customer satisfaction.
            </p>

            <ul className="space-y-3 pt-4">
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Premium Quality Materials</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Expert Craftsmanship</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Custom Design Solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">On-Time Delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
