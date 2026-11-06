export default function FloatingCallButton() {
  return (
    <a
      href="tel:+919784268425"
      aria-label="Call Mohit Furniture Works at +91 9784268425"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-[60] inline-flex min-h-14 items-center gap-3 rounded-full bg-[#785039] px-5 text-white shadow-[0_12px_30px_rgba(47,34,25,0.28)] transition-colors hover:bg-[#5f3d29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#785039] sm:right-6"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M3 5.75A2.75 2.75 0 0 1 5.75 3h1.5a1 1 0 0 1 .97.76l.75 3a1 1 0 0 1-.5 1.12l-1.6.91a11.05 11.05 0 0 0 4.34 4.34l.91-1.6a1 1 0 0 1 1.12-.5l3 .75a1 1 0 0 1 .76.97v1.5A2.75 2.75 0 0 1 14.25 17h-.5C8.37 17 4 12.63 4 7.25v-1.5A2.75 2.75 0 0 1 3 5.75Z"
        />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-sm font-semibold">Call now</span>
        <span className="text-xs text-white/80">+91 97842 68425</span>
      </span>
    </a>
  )
}
