import Image from 'next/image'
import { Reveal } from './reveal'

const DISCIPLINES = ['Data', 'AI', 'Technology', 'Intelligence']

function DisciplineLine({ className = '' }: { className?: string }) {
  return (
    <p className={`label flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {DISCIPLINES.map((word, i) => (
        <span key={word} className="flex items-center gap-x-3">
          <span>{word}</span>
          {i < DISCIPLINES.length - 1 && (
            <span aria-hidden="true" className="text-signal">
              &times;
            </span>
          )}
        </span>
      ))}
    </p>
  )
}

function Portrait({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rule border">
      <Image
        src="/images/gautam-portrait.jpeg"
        alt="Gautam Thiruvalluvan, Data Analyst and GenAI Architect"
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 34vw"
        className="object-cover object-[50%_18%]"
      />
      {/* Edge fade — composites the portrait into the ink canvas so overlapping type stays legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, var(--ink) 0%, transparent 34%), linear-gradient(0deg, var(--ink) 2%, transparent 26%)',
        }}
      />
      <span className="label-sm absolute bottom-3 right-3 text-paper/80">
        Fig. 01
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden pt-20 md:pt-24"
    >
      <div className="mx-auto flex min-h-svh max-w-[1600px] flex-col px-5 md:px-10">
        {/* Top meta strip */}
        <div className="rule flex items-center justify-between border-b py-4 text-muted-foreground">
          <span className="label-sm">Portfolio — Vol. 01</span>
          <span className="label-sm hidden sm:inline">Available for 2026</span>
          <span className="label-sm">01 — Introduction</span>
        </div>

        {/* ===== Desktop / large: layered editorial composition ===== */}
        <div className="relative hidden flex-1 lg:block">
          <div className="absolute right-0 top-1/2 aspect-[4/5] w-[34vw] max-w-[460px] -translate-y-1/2">
            <Reveal className="h-full" delay={120}>
              <Portrait priority />
            </Reveal>
          </div>

          <div className="flex h-full flex-col justify-center">
            <Reveal as="p" className="label text-muted-foreground">
              Selected work in data &amp; applied intelligence
            </Reveal>

            <h1 className="relative z-10 mt-8 text-paper">
              <Reveal as="span" className="block display-hero" delay={80}>
                Gautam
              </Reveal>
              <Reveal
                as="span"
                className="block display-hero italic text-balance"
                delay={160}
              >
                Thiruvalluvan
              </Reveal>
            </h1>

            <Reveal
              className="mt-10 max-w-xl border-l border-signal pl-5"
              delay={260}
            >
              <p className="lede text-paper">
                A Data Analyst and GenAI Architect designing the systems where
                raw data becomes applied intelligence.
              </p>
            </Reveal>
          </div>

          {/* Bottom rail */}
          <div className="rule absolute inset-x-0 bottom-6 flex items-end justify-between border-t pt-4">
            <DisciplineLine className="text-paper" />
            <a
              href="#foundations"
              className="label-sm cue inline-flex items-center gap-2 text-muted-foreground"
            >
              Scroll <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

        {/* ===== Mobile / tablet: elegant, not stacked cards ===== */}
        <div className="flex flex-1 flex-col justify-center py-10 lg:hidden">
          <Reveal as="p" className="label text-muted-foreground">
            Selected work in data &amp; applied intelligence
          </Reveal>

          <h1 className="mt-6 text-paper">
            <Reveal as="span" className="block display-xl" delay={60}>
              Gautam
            </Reveal>
            <Reveal as="span" className="block display-xl italic" delay={140}>
              Thiruvalluvan
            </Reveal>
          </h1>

          <Reveal className="mt-8" delay={220}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <Portrait priority />
            </div>
          </Reveal>

          <Reveal className="mt-8 border-l border-signal pl-4" delay={300}>
            <p className="lede text-paper">
              A Data Analyst and GenAI Architect designing the systems where raw
              data becomes applied intelligence.
            </p>
          </Reveal>

          <div className="rule mt-8 border-t pt-4">
            <DisciplineLine className="text-paper" />
          </div>
        </div>
      </div>
    </section>
  )
}
