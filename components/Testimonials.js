export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      comment: 'Exceptional quality and craftsmanship! The furniture exceeded our expectations. Highly recommend!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Interior Designer',
      comment: 'Working with Mohit Furniture Works has been amazing. Their custom designs are phenomenal!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Business Owner',
      comment: 'Professional service from start to finish. Our office looks stunning with their furniture.',
      rating: 5,
      image: '👨‍💻',
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real reviews from satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold gradient-text">1000+</p>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">500+</p>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">15+</p>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">4.9/5</p>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
