export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      comment: 'Exceptional quality and craftsmanship. The furniture exceeded our expectations and completely transformed our home.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Interior Designer',
      comment: 'Working with Mohit Furniture Works has been a seamless experience. Their custom designs are elegant and highly functional.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Business Owner',
      comment: 'Professional service from start to finish. Our office looks polished and welcoming thanks to their craftsmanship.',
      rating: 5,
      image: '👨‍💻'
    }
  ]

  return (
    <section id="testimonials" className="bg-[#f8f3ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#90755d]">Testimonials</p>
          <h2 className="section-title">What our customers say</h2>
          <p className="section-subtitle">Real feedback from people who chose quality, comfort, and craftsmanship.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[1.6rem] border border-[#eadfd5] bg-white p-7 shadow-[0_18px_36px_rgba(54,41,31,0.05)]"
            >
              <div className="mb-5 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg text-[#d9a85d]">★</span>
                ))}
              </div>

              <p className="mb-7 text-lg leading-8 text-[#4f4844] italic">
                “{testimonial.comment}”
              </p>

              <div className="flex items-center gap-4 border-t border-[#efe3d9] pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d39d68] to-[#84583d] text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-[#1d1a18]">{testimonial.name}</p>
                  <p className="text-sm text-[#6e655f]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 text-center md:grid-cols-4">
          {[
            ['1000+', 'Happy customers'],
            ['500+', 'Projects completed'],
            ['15+', 'Years experience'],
            ['4.9/5', 'Average rating']
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.4rem] border border-[#eadfd5] bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold tracking-[-0.06em] text-[#8d5e3b] md:text-4xl">{value}</p>
              <p className="mt-2 text-sm text-[#5e5652]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
