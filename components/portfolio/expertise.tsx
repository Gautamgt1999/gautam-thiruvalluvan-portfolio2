'use client'

import { useState } from 'react'
import { Reveal } from '@/components/portfolio/reveal'

type Discipline = {
  index: string
  title: string
  technologies: string[]
}

const DISCIPLINES: Discipline[] = [
  {
    index: '01',
    title: 'AI & Automation',
    technologies: [
      'Vertex AI',
      'Multi-Agent RAG',
      'Prompt Engineering',
      'LLM Grounding',
      'BigQuery ML',
      'Machine Learning',
    ],
  },
  {
    index: '02',
    title: 'Data Analysis',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SQL',
      'PostgreSQL',
      'Advanced EDA',
      'Statistical Modeling',
      'Hadoop / Hive',
    ],
  },
  {
    index: '03',
    title: 'Visualization',
    technologies: [
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Google Analytics / GA4',
      'Microsoft Excel',
    ],
  },
  {
    index: '04',
    title: 'Governance & Research',
    technologies: [
      'DPDPA 2023 Compliance',
      'Forensic Technology',
      'Data Integrity Auditing',
      'MATLAB',
      'Simulink',
    ],
  },
]

export function Expertise() {
  const [active, setActive] = useState(0)
  const activeDiscipline = DISCIPLINES[active]

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative border-t border-border bg-background px-6 py-24 md:px-12 md:py-40"
    >
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
          <span className="font-mono text-label uppercase tracking-[0.28em] text-muted-foreground">
            02 — The Expertise
          </span>
          <span className="font-mono text-label uppercase tracking-[0.28em] text-muted-foreground">
            A Technology Manifesto
          </span>
        </div>
      </Reveal>

      {/* Desktop / tablet: interactive index + reactive typographic field */}
      <div className="mt-16 hidden gap-12 md:grid md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-5">
          <ul className="flex flex-col">
            {DISCIPLINES.map((d, i) => {
              const isActive = i === active
              return (
                <li key={d.title} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group flex w-full items-baseline gap-5 py-6 text-left transition-colors duration-500"
                  >
                    <span
                      className={`font-mono text-label tabular-nums tracking-[0.28em] transition-colors duration-500 ${
                        isActive ? 'text-[color:var(--signal)]' : 'text-muted-foreground'
                      }`}
                    >
                      {d.index}
                    </span>
                    <span
                      className={`font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.01em] transition-all duration-500 ${
                        isActive
                          ? 'translate-x-2 text-foreground'
                          : 'text-muted-foreground/60 group-hover:text-muted-foreground'
                      }`}
                    >
                      {d.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="md:col-span-7 lg:col-span-7">
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <span className="font-mono text-label uppercase tracking-[0.28em] text-muted-foreground">
              {activeDiscipline.index} / {activeDiscipline.title}
            </span>
            <span className="font-mono text-label tabular-nums uppercase tracking-[0.28em] text-muted-foreground">
              {String(activeDiscipline.technologies.length).padStart(2, '0')} Tools
            </span>
          </div>
          <ul
            key={activeDiscipline.title}
            className="flex flex-wrap items-baseline gap-x-8 gap-y-3 pt-10"
          >
            {activeDiscipline.technologies.map((tech, i) => (
              <li
                key={tech}
                className="expertise-tech font-serif text-[clamp(1.5rem,2.6vw,2.75rem)] leading-tight tracking-[-0.01em] text-foreground"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: elegant stacked manifesto, all technologies exposed as typography */}
      <div className="mt-12 flex flex-col md:hidden">
        {DISCIPLINES.map((d) => (
          <Reveal key={d.title}>
            <div className="border-b border-border py-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-label tabular-nums tracking-[0.28em] text-[color:var(--signal)]">
                  {d.index}
                </span>
                <h3 className="font-serif text-[2rem] leading-[0.95] tracking-[-0.01em] text-foreground">
                  {d.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                {d.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-serif text-[1.375rem] leading-tight tracking-[-0.01em] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
