export function SiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 text-paper md:px-10 md:py-7"
      >
        <a href="#top" className="label tracking-[0.2em] leading-none">
          GT<span className="align-super text-[0.55em]">®</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <span className="label-sm opacity-70">Data Analyst</span>
          <span className="label-sm opacity-70">/</span>
          <span className="label-sm opacity-70">GenAI Architect</span>
        </div>

        <a
          href="#foundations"
          className="label group inline-flex items-center gap-2 leading-none"
        >
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
          />
          <span>Index</span>
        </a>
      </nav>
    </header>
  )
}
