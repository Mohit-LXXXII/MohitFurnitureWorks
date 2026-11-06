import Image from 'next/image'
import Slider from './Slider'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 sm:pt-12 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top,_rgba(183,122,71,0.12),_transparent_46%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="hero-portrait-stage order-1 mx-auto w-full max-w-[390px] lg:order-2 lg:max-w-none">
            <div className="hero-portrait-frame">
              <div className="hero-portrait-image relative aspect-[0.86] overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#eadfd5] shadow-[0_30px_75px_rgba(54,41,31,0.18)] sm:rounded-[2.5rem]">
                <Image
                  src="/hero-portrait.jpeg"
                  alt="Portrait photo shared for Mohit Furniture Works"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 48vw"
                  className="object-cover object-[center_38%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211a16]/55 via-transparent to-white/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-7">
                  <div className="max-w-[230px]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">Mohit Furniture Works</p>
                    <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">Crafted with care</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 text-lg text-white backdrop-blur-md" aria-hidden="true">✦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-copy order-2 space-y-6 text-center sm:space-y-8 lg:order-1 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7d9cc] bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7b645a] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#b77a47]" />
              Custom furniture studio
            </div>

            <div className="space-y-4 sm:space-y-5">
              <h2 className="mx-auto max-w-xl text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.06em] text-[#1b1816] sm:text-5xl md:text-6xl lg:mx-0">
                Beautiful furniture for
                <span className="gradient-text block">everyday living</span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-7 text-[#5d524d] sm:text-lg sm:leading-8 md:text-xl lg:mx-0">
                Discover premium handcrafted furniture, bespoke interiors, and repair solutions designed to elevate your home with comfort, warmth, and timeless craftsmanship.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="https://maps.app.goo.gl/i4XUEBzBs9thSFxg8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit showroom
              </a>
              <a href="tel:+919784268425" className="btn-secondary">
                Call now
              </a>
            </div>

            <div className="mx-auto grid max-w-xl grid-cols-3 gap-3 border-t border-[#e8dfd6] pt-6 text-left sm:gap-6 sm:pt-8 lg:mx-0">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em] text-[#1d1b1a] md:text-3xl">25+</p>
                <p className="mt-1 text-sm text-[#665f5b]">Years</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em] text-[#1d1b1a] md:text-3xl">1000+</p>
                <p className="mt-1 text-sm text-[#665f5b]">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em] text-[#1d1b1a] md:text-3xl">4.9/5</p>
                <p className="mt-1 text-sm text-[#665f5b]">Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-[#e8dfd6] pt-12 sm:mt-20 sm:pt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#90755d]">A look at our work</p>
          <Slider />
        </div>
      </div>
    </section>
  )
}
