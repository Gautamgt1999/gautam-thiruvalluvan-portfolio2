import { Reveal } from './reveal'

const FLOW = [
  {
    step: 'DATA',
    note: 'Raw signal, gathered and governed',
  },
  {
    step: 'INSIGHT',
    note: 'Patterns surfaced, made legible',
  },
  {
    step: 'INTELLIGENCE',
    note: 'Systems that reason and retrieve',
  },
  {
    step: 'DECISION',
    note: 'Judgement, delivered to the point of action',
  },
]

const DISCIPLINES = [
  'Data Analytics',
  'AI & Automation',
  'Visualization',
  'Responsible Data Handling',
  'Prompt Engineering',
  'Google Cloud',
  'RAG Architecture',
]

function SectionMarker({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule flex items-baseline justify-between border-t pt-4">
      <span className="label text-muted-foreground">{index}</span>
      <span className="label text-muted-foreground">{title}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="w-full py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Intro — oversized split */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="label text-signal">
              01 — The Practice
            </Reveal>
            <Reveal as="h2" className="mt-6 display-xl text-paper text-balance" delay={80}>
              A discipline of turning data into decisions.
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7 self-end" delay={140}>
            <p className="lede text-muted-foreground text-pretty">
              Certified Data Analyst and GenAI Architect, specialised in
              engineering production-ready RAG systems and predictive
              intelligence.
            </p>
          </Reveal>
        </div>

        {/* The signature axis: DATA → INSIGHT → INTELLIGENCE → DECISION */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="A" title="The Throughline" />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="lede text-paper text-pretty">
                Every engagement follows one throughline — signal is refined,
                step by step, until it becomes something worth acting on.
              </p>
            </Reveal>

            <ol className="lg:col-span-7 lg:col-start-6">
              {FLOW.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.step}
                  className="group relative"
                  delay={i * 90}
                >
                  <div className="rule flex flex-col gap-6 border-t py-8 md:flex-row md:items-baseline md:gap-10 md:py-10">
                    <span className="label-sm w-10 shrink-0 text-muted-foreground/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="display-lg flex-1 text-paper">
                      {f.step}
                    </span>
                    <span className="label text-muted-foreground md:max-w-52 md:text-right">
                      {f.note}
                    </span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-full -translate-y-1/2 text-signal md:left-10"
                    >
                      ↓
                    </span>
                  )}
                </Reveal>
              ))}
              <div className="rule border-t" />
            </ol>
          </div>
        </div>

        {/* Capabilities — typographic index, not cards */}
        <div className="mt-24 md:mt-32">
          <SectionMarker index="B" title="The Toolkit" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="lede text-paper text-pretty">
                A profile built where analytics, applied AI and responsible
                practice meet.
              </p>
            </Reveal>
            <ul className="lg:col-span-7 lg:col-start-6">
              {DISCIPLINES.map((d, i) => (
                <Reveal
                  as="li"
                  key={d}
                  className="rule flex items-baseline justify-between gap-6 border-t py-5"
                  delay={i * 50}
                >
                  <span className="display-lg text-paper">{d}</span>
                  <span className="label-sm shrink-0 text-muted-foreground/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Reveal>
              ))}
              <div className="rule border-t" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
