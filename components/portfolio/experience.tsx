import { Reveal } from '@/components/portfolio/reveal'

const CONTRIBUTIONS = [
  {
    index: '01',
    lead: 'Automated SQL query generation using Advanced Prompt Engineering',
    tail: 'compressing the manual coding cycle.',
    metric: true,
  },
  {
    index: '02',
    lead: 'Developed interactive Power BI reports to visualise business KPIs',
    tail: 'enabling faster data-driven risk profiling.',
    metric: false,
  },
  {
    index: '03',
    lead: 'Collaborated across cross-functional teams to translate synthetic data',
    tail: 'into delinquency prediction models.',
    metric: false,
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-border bg-background px-6 py-24 md:px-12 md:py-40"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
          <span className="font-mono text-label uppercase tracking-[0.28em] text-muted-foreground">
            03 — The Experience
          </span>
          <span className="font-mono text-label uppercase tracking-[0.28em] text-muted-foreground">
            A Working Record
          </span>
        </div>
      </Reveal>

      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      {/* Timeline: hairline rail + prominent year span + editorial detail */}
      <div className="mt-16 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-12">
        {/* Prominent 2025 → 2026 */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="md:sticky md:top-24">
              <div className="flex flex-col leading-[0.82]">
                <span className="font-serif text-[clamp(4.5rem,13vw,10rem)] tracking-[-0.02em] text-foreground">
                  2025
                </span>
                <span
                  className="font-serif text-[clamp(4.5rem,13vw,10rem)] italic tracking-[-0.02em] text-[color:var(--signal)]"
                  aria-hidden="true"
                >
                  → 26
                </span>
              </div>
              <p className="mt-8 max-w-xs font-mono text-label uppercase leading-relaxed tracking-[0.28em] text-muted-foreground">
                Data Analytics Intern
                <br />
                <span className="text-foreground">UK Info Tech</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contributions on a vertical hairline rail */}
        <div className="md:col-span-7">
          <ol className="relative flex flex-col border-l border-border pl-8 md:pl-12">
            {CONTRIBUTIONS.map((c) => (
              <li key={c.index} className="relative pb-14 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+1px)] top-2 size-2 -translate-x-1/2 rounded-full bg-[color:var(--signal)] md:-left-[calc(3rem+1px)]"
                  aria-hidden="true"
                />
                <Reveal>
                  <span className="font-mono text-label tabular-nums tracking-[0.28em] text-muted-foreground">
                    {c.index}
                  </span>

                  {c.metric ? (
                    <div className="mt-5 flex flex-col gap-4">
                      <p className="font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.05] tracking-[-0.01em] text-foreground text-pretty">
                        {c.lead},
                      </p>
                      <div className="flex items-end gap-5">
                        <span className="font-serif text-[clamp(5rem,14vw,11rem)] leading-[0.8] tracking-[-0.03em] text-[color:var(--signal)]">
                          30
                          <span className="align-top text-[0.4em]">%</span>
                        </span>
                        <span className="pb-3 font-mono text-label uppercase leading-relaxed tracking-[0.28em] text-muted-foreground">
                          reduction in
                          <br />
                          manual coding time
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-5 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.05] tracking-[-0.01em] text-foreground text-pretty">
                      {c.lead},{' '}
                      <span className="text-muted-foreground">{c.tail}</span>
                    </p>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
