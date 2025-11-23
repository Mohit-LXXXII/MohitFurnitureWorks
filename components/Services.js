export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Furniture Design',
      description: 'Personalized furniture crafted according to your specifications and preferences',
      icon: '🎨',
    },
    {
      id: 2,
      title: 'Furniture Repair & Restoration',
      description: 'Professional repair and restoration services to bring old furniture back to life',
      icon: '🔧',
    },
    {
      id: 3,
      title: '25+ Years Experience',
      description: 'Over two decades of expertise in creating quality furniture and satisfied customers',
      icon: '⭐',
    },
    {
      id: 4,
      title: 'Delivery & Installation',
      description: 'Professional delivery and installation services with care and precision',
      icon: '🚚',
    },
    {
      id: 5,
      title: 'Affordable & Durable Furniture',
      description: 'Premium quality furniture at competitive prices built to last for years',
      icon: '💎',
    },
    {
      id: 6,
      title: 'Warranty & Support',
      description: '24/7 customer support and extended warranty options for peace of mind',
      icon: '✅',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your furniture needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Custom Furniture?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our design team is ready to help you create the perfect furniture pieces for your space.
            </p>
            <a href="tel:+919784268425" className="btn-primary inline-block">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
