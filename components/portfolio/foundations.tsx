import { Reveal } from './reveal'

const COLORS = [
  { name: 'Ink', role: 'Primary canvas', value: 'oklch(0.165 0.006 265)', sw: 'bg-ink', ring: true },
  { name: 'Paper', role: 'Type & light surface', value: 'oklch(0.938 0.006 95)', sw: 'bg-paper' },
  { name: 'Graphite', role: 'Raised surface', value: 'oklch(0.235 0.006 265)', sw: 'bg-muted' },
  { name: 'Signal', role: 'Restrained accent', value: 'oklch(0.800 0.118 78)', sw: 'bg-signal' },
]

const TYPE = [
  { sample: 'Aa', label: 'Display / Serif', spec: 'Instrument Serif · 400 · clamp 52 → 240px', cls: 'display-lg' },
  { sample: 'Editorial voice', label: 'Lede / Serif', spec: 'Instrument Serif · 400 · clamp 20 → 30px', cls: 'lede' },
  { sample: 'The operating body copy for the portfolio.', label: 'Body / Mono', spec: 'Geist Mono · 400 · 16px / 1.6', cls: 'text-base leading-relaxed' },
  { sample: 'META · LABEL · INDEX', label: 'Label / Mono', spec: 'Geist Mono · uppercase · 0.22em tracking', cls: 'label' },
]

const SPACING = [
  { token: '02', px: '8px', w: 'w-2' },
  { token: '04', px: '16px', w: 'w-4' },
  { token: '08', px: '32px', w: 'w-8' },
  { token: '16', px: '64px', w: 'w-16' },
  { token: '24', px: '96px', w: 'w-24' },
  { token: '40', px: '160px', w: 'w-40' },
]

const PRINCIPLES = [
  { k: 'Navigation', v: 'Minimal and blend-inverted. A wordmark, the discipline, and a single index anchor — no persistent chrome competing with the work.' },
  { k: 'Grid', v: 'A hairline editorial grid on a wide max measure. Asymmetry and negative space carry hierarchy; borders stay at 1px.' },
  { k: 'Motion', v: 'Restrained. One staggered entrance per section on scroll, eased long. Reduced-motion users receive the static composition.' },
  { k: 'Imagery', v: 'The photograph is treated as a framed plate — full colour, composited into the ink canvas by edge fade, never distorted.' },
]

function SectionMarker({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule flex items-baseline justify-between border-t pt-4">
      <span className="label text-muted-foreground">{index}</span>
      <span className="label text-muted-foreground">{title}</span>
    </div>
  )
}

export function Foundations() {
  return (
    <section id="foundations" className="w-full py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="label text-signal">
              04 — The System
            </Reveal>
            <Reveal as="h2" className="mt-6 display-xl text-paper text-balance" delay={80}>
              Foundations
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7 self-end" delay={140}>
            <p className="lede text-muted-foreground text-pretty">
              A narrow, deliberate vocabulary — one serif, one mono, four values
              and a single signal. Everything downstream is composed from these
              parts.
            </p>
          </Reveal>
        </div>

        {/* Typography */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="A" title="Typography" />
          <div className="mt-10 grid gap-px overflow-hidden rule border md:grid-cols-2">
            {TYPE.map((t, i) => (
              <Reveal
                key={t.label}
                className="flex min-h-52 flex-col justify-between gap-8 bg-card p-6 md:p-8"
                delay={i * 70}
              >
                <div className={`${t.cls} text-paper`}>{t.sample}</div>
                <div className="rule flex items-end justify-between border-t pt-4">
                  <span className="label text-paper">{t.label}</span>
                  <span className="label-sm text-muted-foreground text-right">{t.spec}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="B" title="Colour" />
          <div className="mt-10 grid gap-px overflow-hidden rule border sm:grid-cols-2 lg:grid-cols-4">
            {COLORS.map((c, i) => (
              <Reveal key={c.name} className="bg-card p-6 md:p-8" delay={i * 70}>
                <div
                  className={`${c.sw} ${c.ring ? 'rule border' : ''} aspect-[3/2] w-full`}
                />
                <div className="mt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="label text-paper">{c.name}</span>
                    <span className="label-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <p className="label-sm mt-2 text-muted-foreground">{c.role}</p>
                  <p className="label-sm mt-4 text-muted-foreground/70">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="C" title="Spacing & Rhythm" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="lede text-paper text-pretty">
                A single base unit, scaled generously. Dramatic gaps do the work
                that borders and boxes usually would.
              </p>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col gap-5">
                {SPACING.map((s, i) => (
                  <Reveal
                    key={s.token}
                    className="flex items-center gap-6"
                    delay={i * 60}
                  >
                    <span className="label-sm w-8 shrink-0 text-muted-foreground">
                      {s.token}
                    </span>
                    <span className={`${s.w} h-2.5 shrink-0 bg-signal`} />
                    <span className="label-sm text-muted-foreground">{s.px}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="D" title="Language & Motion" />
          <div className="mt-10 grid gap-px overflow-hidden rule border md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.k}
                className="flex flex-col gap-4 bg-card p-6 md:p-10"
                delay={i * 70}
              >
                <span className="label text-signal">{p.k}</span>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {p.v}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <Reveal className="rule mt-24 flex flex-col gap-4 border-t pt-6 md:mt-32 md:flex-row md:items-center md:justify-between">
          <p className="label text-muted-foreground">
            Design system established — homepage direction set
          </p>
          <p className="label text-muted-foreground">
            Gautam Thiruvalluvan © 2026
          </p>
        </Reveal>
      </div>
    </section>
  )
}
