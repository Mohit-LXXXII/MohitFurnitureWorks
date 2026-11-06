export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Modern wardrobes',
      description: 'Tailored storage that keeps every room feeling open and refined.',
      image: '/furniture-1.jpg'
    },
    {
      id: 2,
      name: 'Dressing units',
      description: 'Elegant, practical solutions for a polished bedroom experience.',
      image: '/furniture-2.jpg'
    },
    {
      id: 3,
      name: 'Bedroom styling',
      description: 'Comfort-driven designs that turn bedrooms into calming retreats.',
      image: '/furniture-3.jpg'
    },
    {
      id: 4,
      name: 'Wooden doors',
      description: 'Clean lines and premium finishes for lasting visual impact.',
      image: '/furniture-4.jpg'
    },
    {
      id: 5,
      name: 'Kitchen units',
      description: 'Smart layouts designed for everyday ease and elevated aesthetics.',
      image: '/furniture-5.jpg'
    },
    {
      id: 6,
      name: 'Custom woodwork',
      description: 'Bespoke furniture crafted around your lifestyle and space.',
      image: '/mohit-furniture.webp'
    }
  ]

  return (
    <section id="products" className="bg-[#f8f3ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#90755d]">Our collection</p>
          <h2 className="section-title">Featured furniture collections</h2>
          <p className="section-subtitle">Thoughtful pieces designed to balance beauty, comfort, and utility.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.75rem] border border-[#eadfd5] bg-white shadow-[0_22px_50px_rgba(57,42,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(57,42,31,0.1)]"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#1f1b19]">{product.name}</h3>
                </div>
                <p className="text-base leading-7 text-[#5e5652]">{product.description}</p>
                <button className="inline-flex items-center gap-2 rounded-full border border-[#e7d9cc] bg-[#f8f3ef] px-4 py-2 text-sm font-medium text-[#2d2825] hover:border-[#b77a47] hover:bg-[#f4e7dc]">
                  Learn more
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
