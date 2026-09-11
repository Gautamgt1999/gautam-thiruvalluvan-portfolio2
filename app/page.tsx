import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Expertise } from '@/components/portfolio/expertise'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Foundations } from '@/components/portfolio/foundations'

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Foundations />
    </main>
  )
}
