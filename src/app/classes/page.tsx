import type { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { DISCIPLINES, STUDIOS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Children's Classes | Fitchett Proll Dance",
  description:
    "Ballet, Tap, Modern Jazz, Street Dance, Contemporary, Acrobatic Dance and more for children and teens across Lancashire.",
}

const classDays = [
  { day: "Monday", studio: "Fulwood" },
  { day: "Tuesday", studio: "Cottam & Woodplumpton" },
  { day: "Wednesday", studio: "Blackburn with Darwen & Longton" },
  { day: "Thursday", studio: "Bamber Bridge & Kirkham" },
  { day: "Friday", studio: "Kirkham & Wesham" },
  { day: "Saturday", studio: "Preston & Kirkham" },
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Children &amp; Teens"
            title="Children's Classes"
            subtitle="Classical Ballet, Pointes, Tap, Modern Jazz, Street Dance, Contemporary, Acrobatic Dance and more — across nine studios in Lancashire."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Disciplines grid */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16">

          <SectionHeading
            eyebrow="Disciplines"
            title="What We Teach"
            subtitle="All classes follow the BTDA syllabus. Examinations are offered every term."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DISCIPLINES.map((disc, i) => (
              <AnimatedSection key={disc.name} delay={i * 0.06}>
                <div className="group flex gap-6 p-7 bg-mist border-l-4 border-transparent hover:border-rose transition-all duration-300">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl text-ink">{disc.name}</h3>
                      <span className="font-sans text-champagne text-xs tracking-widest uppercase shrink-0 pt-1">
                        {disc.age}
                      </span>
                    </div>
                    <div className="w-6 h-px bg-rose/40 group-hover:w-12 group-hover:bg-rose transition-all duration-300" />
                    <p className="font-sans text-stone text-sm leading-relaxed">{disc.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Days + studios */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionHeading
            eyebrow="Schedule"
            title="Classes Run All Week"
            subtitle="Find your nearest studio and check the timetable for specific class times."
            align="left"
          />
          <div className="flex flex-col gap-3">
            {classDays.map((item, i) => (
              <AnimatedSection key={item.day} delay={i * 0.06}>
                <div className="flex items-center gap-6 py-4 border-b border-ink/8 last:border-0">
                  <span className="font-serif text-rose w-28 shrink-0">{item.day}</span>
                  <span className="font-sans text-stone text-sm">{item.studio}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exams callout */}
      <section className="bg-rose py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="font-sans text-cream/60 tracking-[0.3em] uppercase text-xs">Examinations</span>
          <h2 className="font-serif text-4xl text-cream font-normal leading-tight">
            100% BTDA Pass Rate
          </h2>
          <p className="font-sans text-cream/70 text-base leading-relaxed max-w-lg">
            Examinations are conducted every term in Classical Ballet, Pointes, Tap, Modern Jazz, Musical Theatre, Street Dance, Contemporary Dance, Classical Acrobatic Dance, and Modelling — all through the British Theatre Dance Association.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="/timetables"
              className="inline-flex items-center justify-center bg-cream text-rose font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-cream/90 transition-colors"
            >
              View Timetables
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center border border-cream text-cream font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-cream hover:text-rose transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Studios mini-list */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Locations"
            title="Our Nine Studios"
            subtitle="Free parking at every location."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STUDIOS.map((studio, i) => (
              <AnimatedSection key={studio.name} delay={i * 0.05}>
                {studio.url ? (
                  <a
                    href={studio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 bg-mist hover:bg-blush hover:border-rose border border-transparent transition-all duration-300 text-center"
                  >
                    <span className="font-serif text-base text-ink hover:text-rose block">{studio.name}</span>
                    <span className="font-sans text-stone text-xs mt-1 block">{studio.day}</span>
                  </a>
                ) : (
                  <div className="block p-5 bg-mist text-center">
                    <span className="font-serif text-base text-ink block">{studio.name}</span>
                    <span className="font-sans text-stone text-xs mt-1 block">{studio.day}</span>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
