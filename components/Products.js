export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Luxury Sofas',
      description: 'Comfortable and elegant sofas for your living room',
      icon: '🛋️',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Dining Sets',
      description: 'Exquisite dining furniture for family gatherings',
      icon: '🪑',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      name: 'Bedroom Collection',
      description: 'Luxurious beds and bedroom essentials',
      icon: '🛏️',
      color: 'from-blue-400 to-purple-500',
    },
    {
      id: 4,
      name: 'Office Furniture',
      description: 'Professional furniture for workspaces',
      icon: '🖥️',
      color: 'from-purple-400 to-blue-500',
    },
    {
      id: 5,
      name: 'Custom Woodwork',
      description: 'Bespoke wooden pieces tailored to your needs',
      icon: '🪵',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 6,
      name: 'Storage Solutions',
      description: 'Smart and stylish storage for every room',
      icon: '📦',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Furniture Collections</h2>
          <p className="section-subtitle">Explore our diverse range of premium furniture pieces</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              <div className={`h-40 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <span className="text-6xl">{product.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
