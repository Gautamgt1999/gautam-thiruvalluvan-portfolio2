'use client'

import { Reveal } from '@/components/portfolio/reveal'

/* Abstract data-visualization placeholders — no invented screenshots.
   Each is a restrained, generative composition keyed to the project's domain. */

function RagNetworkViz() {
  // Multi-agent RAG: a central query node feeding retrieval/agent nodes.
  const center = { x: 300, y: 200 }
  const nodes = [
    { x: 120, y: 90 },
    { x: 480, y: 96 },
    { x: 92, y: 300 },
    { x: 508, y: 304 },
    { x: 300, y: 56 },
    { x: 300, y: 344 },
    { x: 180, y: 200 },
    { x: 420, y: 200 },
  ]
  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full"
      role="img"
      aria-label="Abstract multi-agent retrieval network diagram"
      preserveAspectRatio="xMidYMid slice"
    >
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="var(--foreground)"
          strokeOpacity={0.18}
          strokeWidth={1}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={`n-${i}`} cx={n.x} cy={n.y} r={i % 3 === 0 ? 5 : 3} fill="var(--foreground)" fillOpacity={0.5} />
      ))}
      <circle cx={center.x} cy={center.y} r={44} fill="none" stroke="var(--signal)" strokeOpacity={0.35} strokeWidth={1} />
      <circle cx={center.x} cy={center.y} r={9} fill="var(--signal)" />
    </svg>
  )
}

function TrendLinesViz() {
  // Longitudinal population trend: layered ascending curves, 1960–2024.
  const paths = [
    'M0 330 C 120 320, 240 300, 360 250 S 540 150, 600 96',
    'M0 350 C 120 346, 240 330, 360 300 S 540 210, 600 150',
    'M0 366 C 120 362, 240 356, 360 336 S 540 286, 600 236',
  ]
  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full"
      role="img"
      aria-label="Abstract ascending demographic trend lines"
      preserveAspectRatio="none"
    >
      {[80, 150, 220, 290, 360].map((y) => (
        <line key={y} x1={0} y1={y} x2={600} y2={y} stroke="var(--foreground)" strokeOpacity={0.08} strokeWidth={1} />
      ))}
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i === 0 ? 'var(--signal)' : 'var(--foreground)'}
          strokeOpacity={i === 0 ? 0.85 : 0.28}
          strokeWidth={i === 0 ? 2 : 1}
        />
      ))}
    </svg>
  )
}

function ScatterModelViz() {
  // Churn classification: two clusters split by a decision boundary.
  const seed = (n: number) => {
    const x = Math.sin(n * 999.13) * 10000
    return x - Math.floor(x)
  }
  const dots = Array.from({ length: 46 }, (_, i) => {
    const retained = i % 2 === 0
    const bx = retained ? 180 : 420
    const by = retained ? 250 : 150
    return {
      x: bx + (seed(i) - 0.5) * 190,
      y: by + (seed(i + 100) - 0.5) * 190,
      retained,
    }
  })
  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full"
      role="img"
      aria-label="Abstract classification scatter plot with decision boundary"
      preserveAspectRatio="xMidYMid slice"
    >
      <line x1={90} y1={360} x2={510} y2={60} stroke="var(--signal)" strokeOpacity={0.4} strokeWidth={1} strokeDasharray="4 6" />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={4}
          fill={d.retained ? 'var(--foreground)' : 'var(--signal)'}
          fillOpacity={d.retained ? 0.4 : 0.85}
        />
      ))}
    </svg>
  )
}

function BarDashboardViz() {
  // Sales dashboard: regional bars with a highlighted top performer.
  const bars = [46, 72, 58, 96, 64, 38, 80, 52]
  const bw = 44
  const gap = 26
  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full"
      role="img"
      aria-label="Abstract regional sales bar chart"
      preserveAspectRatio="xMidYMid slice"
    >
      <line x1={40} y1={340} x2={560} y2={340} stroke="var(--foreground)" strokeOpacity={0.2} strokeWidth={1} />
      {bars.map((h, i) => {
        const x = 60 + i * (bw + gap)
        const barH = (h / 100) * 260
        const top = 340 - barH
        return (
          <rect
            key={i}
            x={x}
            y={top}
            width={bw}
            height={barH}
            fill={h === 96 ? 'var(--signal)' : 'var(--foreground)'}
            fillOpacity={h === 96 ? 0.9 : 0.24}
          />
        )
      })}
    </svg>
  )
}

function GitHubAction({
  href,
  label = 'View on GitHub',
  featured = false,
}: {
  href: string
  label?: string
  featured?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/gh inline-flex items-center gap-3 font-mono uppercase tracking-[0.18em] transition-colors ${
        featured
          ? 'text-[0.8rem] text-[color:var(--signal)] hover:text-foreground'
          : 'text-[0.7rem] text-foreground/60 hover:text-[color:var(--signal)]'
      }`}
    >
      <span
        className={`h-px transition-all duration-500 ${
          featured
            ? 'w-10 bg-[color:var(--signal)] group-hover/gh:w-16'
            : 'w-6 bg-foreground/40 group-hover/gh:w-12 group-hover/gh:bg-[color:var(--signal)]'
        }`}
      />
      {label}
      <span aria-hidden className="transition-transform duration-500 group-hover/gh:translate-x-1">
        ↗
      </span>
    </a>
  )
}

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative border-t border-foreground/10 py-24 md:py-40">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <Reveal className="mb-20 flex items-end justify-between gap-6 md:mb-32">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-foreground/50">04 — Selected Work</p>
            <h2
              id="work-heading"
              className="mt-5 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em] text-balance"
            >
              A case-study gallery.
            </h2>
          </div>
          <p className="hidden max-w-xs pb-3 font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-foreground/45 md:block">
            Four systems, from multi-agent retrieval to executive analytics.
          </p>
        </Reveal>

        {/* 01 — KTM: full-screen cinematic showcase (dominant) */}
        <Reveal as="article" className="group mb-28 md:mb-44">
          <div className="relative overflow-hidden border border-foreground/12 bg-[color:var(--graphite)]">
            <div className="relative aspect-[4/5] w-full sm:aspect-video md:min-h-[80svh]">
              <div className="absolute inset-0 opacity-70 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]">
                <RagNetworkViz />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Overlaid editorial content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-[clamp(4rem,11vw,9rem)] leading-none tracking-[-0.03em] text-foreground/90">
                    01
                  </span>
                  <span className="mt-3 rounded-none border border-[color:var(--signal)]/50 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--signal)]">
                    Featured
                  </span>
                </div>

                <div className="max-w-4xl">
                  <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-foreground/55">
                    <span>Vertex AI</span>
                    <span aria-hidden>/</span>
                    <span>BigQuery</span>
                    <span aria-hidden>/</span>
                    <span>RAG Architecture</span>
                  </div>
                  <h3 className="font-serif text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[0.94] tracking-[-0.02em] text-balance">
                    KTM Master Tech
                    <span className="block text-foreground/55">AI Ecosystem</span>
                  </h3>
                  <p className="mt-6 max-w-2xl font-mono text-[0.82rem] leading-relaxed tracking-[0.02em] text-foreground/65">
                    Engineered a multi-agent RAG system for automotive diagnostics featuring real-time
                    NL-to-SQL querying, optimized for production environments.
                  </p>
                  <div className="mt-9">
                    <GitHubAction
                      href="https://github.com/Gautamgt1999/ktm-ai-assistant"
                      label="Explore Project"
                      featured
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 02 — Population: large horizontal editorial composition */}
        <Reveal as="article" className="group mb-28 grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 md:mb-44 md:grid-cols-12">
          <div className="order-2 flex flex-col justify-between bg-background p-6 md:order-1 md:col-span-5 md:p-12">
            <div className="flex items-baseline gap-5">
              <span className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.02em] text-foreground/85">
                02
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[color:var(--signal)]">
                1960 — 2024
              </span>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="font-serif text-[clamp(1.9rem,3.6vw,3.25rem)] leading-[0.98] tracking-[-0.02em] text-balance">
                Worldwide Population Trend Analysis
              </h3>
              <p className="mt-6 max-w-md font-mono text-[0.8rem] leading-relaxed tracking-[0.02em] text-foreground/60">
                A longitudinal study of global demographic shifts across 60+ years, powered by an
                automated SQL ETL pipeline cleaning 200+ regional records for trend forecasting.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground/45">
                <span>Python</span>
                <span aria-hidden>/</span>
                <span>SQL</span>
                <span aria-hidden>/</span>
                <span>Power BI</span>
                <span aria-hidden>/</span>
                <span>Tableau</span>
              </div>
              <div className="mt-9">
                <GitHubAction href="https://github.com/Gautamgt1999/Worldwide-Population-1960--2024-" />
              </div>
            </div>
          </div>
          <div className="order-1 min-h-[280px] overflow-hidden bg-[color:var(--graphite)] md:order-2 md:col-span-7 md:min-h-[520px]">
            <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]">
              <TrendLinesViz />
            </div>
          </div>
        </Reveal>

        {/* 03 + 04 — data/model + dashboard compositions, asymmetric pair */}
        <div className="grid grid-cols-1 gap-px border border-foreground/12 bg-foreground/12 lg:grid-cols-2">
          {/* 03 — Powerco churn: data/model-focused */}
          <Reveal as="article" className="group flex flex-col bg-background">
            <div className="relative min-h-[300px] flex-1 overflow-hidden bg-[color:var(--graphite)] md:min-h-[380px]">
              <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]">
                <ScatterModelViz />
              </div>
              <span className="absolute left-6 top-6 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-[-0.02em] text-foreground/80">
                03
              </span>
            </div>
            <div className="p-6 md:p-10">
              <h3 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[0.98] tracking-[-0.02em] text-balance">
                PowerCo Customer Churn Prediction
              </h3>
              <p className="mt-5 max-w-md font-mono text-[0.8rem] leading-relaxed tracking-[0.02em] text-foreground/60">
                A Random Forest classifier identifying high-risk customers from energy consumption —
                surfacing price sensitivity as the primary churn driver and a 10% targeted discount strategy.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground/45">
                <span>Python</span>
                <span aria-hidden>/</span>
                <span>Scikit-learn</span>
                <span aria-hidden>/</span>
                <span>Pandas</span>
              </div>
              <div className="mt-8">
                <GitHubAction href="https://github.com/Gautamgt1999/Powerco_Customer_Churn_Prediction" />
              </div>
            </div>
          </Reveal>

          {/* 04 — Audi dashboard: data-visualization-focused */}
          <Reveal as="article" delay={80} className="group flex flex-col bg-background">
            <div className="relative min-h-[300px] flex-1 overflow-hidden bg-[color:var(--graphite)] md:min-h-[380px]">
              <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]">
                <BarDashboardViz />
              </div>
              <span className="absolute left-6 top-6 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-[-0.02em] text-foreground/80">
                04
              </span>
            </div>
            <div className="p-6 md:p-10">
              <h3 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[0.98] tracking-[-0.02em] text-balance">
                Audi Sales Performance Dashboard
              </h3>
              <p className="mt-5 max-w-md font-mono text-[0.8rem] leading-relaxed tracking-[0.02em] text-foreground/60">
                An executive dashboard visualizing regional sales disparities and top-performing models,
                with Python integrated inside Power BI for outlier detection in seasonal market trends.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground/45">
                <span>Power BI</span>
                <span aria-hidden>/</span>
                <span>Excel</span>
                <span aria-hidden>/</span>
                <span>SQL</span>
                <span aria-hidden>/</span>
                <span>Python</span>
              </div>
              <div className="mt-8">
                <GitHubAction href="https://github.com/Gautamgt1999/-audisales-" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
