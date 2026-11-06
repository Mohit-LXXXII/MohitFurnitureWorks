export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfd5] bg-[#f5efe9] p-3 shadow-[0_28px_60px_rgba(54,41,31,0.08)]">
            <img
              src="/mohit-furniture.webp"
              alt="Mohit Furniture Works Showroom"
              className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[500px]"
            />
          </div>

          <div className="space-y-7">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#90755d]">About us</p>
              <h2 className="section-title">Built for comfortable living</h2>
            </div>

            <p className="text-lg leading-8 text-[#524b47]">
              Welcome to Mohit Furniture Works, where craftsmanship meets contemporary design. For over 25 years, we have helped families and businesses create spaces that feel warm, functional, and distinctly their own.
            </p>

            <p className="text-lg leading-8 text-[#524b47]">
              From modular kitchens and premium wardrobes to custom woodwork and practical storage solutions, each piece is designed with lasting quality, thoughtful detail, and unmatched attention to finish.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              {[
                'Premium quality materials',
                'Expert craftsmanship',
                'Custom design solutions',
                'On-time delivery'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#eadfd5] bg-white/70 p-4 shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b77a47] text-sm font-bold text-white">✓</span>
                  <span className="text-sm font-medium text-[#2f2925]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
