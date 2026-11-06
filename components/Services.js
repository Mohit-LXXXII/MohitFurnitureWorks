export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom furniture design',
      description: 'Bespoke furniture tailored to your layout, taste, and practical needs.',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Repair & restoration',
      description: 'Professional repairs that bring worn-out pieces back to life with care.',
      icon: '🔧'
    },
    {
      id: 3,
      title: '25+ years of experience',
      description: 'Craftsmanship rooted in decades of hands-on knowledge and trusted service.',
      icon: '⭐'
    },
    {
      id: 4,
      title: 'Delivery & installation',
      description: 'Smooth setup from your showroom to your home, handled with precision.',
      icon: '🚚'
    },
    {
      id: 5,
      title: 'Affordable durability',
      description: 'Practical, long-lasting furniture built to fit everyday family life.',
      icon: '💎'
    },
    {
      id: 6,
      title: 'Warranty & support',
      description: 'Helpful guidance and dependable support long after your purchase.',
      icon: '✅'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#90755d]">Our services</p>
          <h2 className="section-title">Everything you need for a better space</h2>
          <p className="section-subtitle">Comprehensive furniture solutions designed around comfort, function, and style.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-[1.6rem] border border-[#e9dfd5] bg-[linear-gradient(180deg,#fffdfb_0%,#f8f3ef_100%)] p-7 shadow-[0_18px_36px_rgba(80,63,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(80,63,52,0.08)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7ebdf] text-3xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.05em] text-[#1e1a18]">{service.title}</h3>
              <p className="text-base leading-7 text-[#5d534f]">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-[2rem] border border-[#e9dfd5] bg-[radial-gradient(circle_at_top,_rgba(183,122,71,0.12),_transparent_35%),linear-gradient(135deg,#fffdfb_0%,#f5eee7_100%)] p-8 shadow-[0_24px_50px_rgba(60,45,35,0.06)] md:p-12">
            <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#1a1817] md:text-4xl">Need a custom solution?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5d534f] md:text-lg">
              Talk with our design team to create furniture that fits your room, your routine, and your taste beautifully.
            </p>
            <a href="tel:+919784268425" className="btn-primary mt-8">
              Get a free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
