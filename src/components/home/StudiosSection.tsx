import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { STUDIOS } from "@/lib/constants"

export default function StudiosSection() {
  return (
    <section className="bg-cream py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">

        <SectionHeading
          eyebrow="Lancashire"
          title="Nine Studios Near You"
          subtitle="Free parking at every location. Classes run Monday through Saturday across the county."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STUDIOS.map((studio, i) => (
            <AnimatedSection key={studio.name} delay={i * 0.05}>
              {studio.url ? (
                <a
                  href={studio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 bg-mist border border-transparent hover:border-rose hover:bg-blush transition-all duration-300"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-lg text-ink group-hover:text-rose transition-colors duration-200">
                      {studio.name}
                    </span>
                    <span className="font-sans text-stone text-xs tracking-wide">
                      {studio.day}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-stone group-hover:text-rose transition-colors duration-200 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center justify-between p-6 bg-mist border border-transparent">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-lg text-ink">{studio.name}</span>
                    <span className="font-sans text-stone text-xs tracking-wide">{studio.day}</span>
                  </div>
                  <span className="font-sans text-stone/40 text-xs tracking-wide">info available</span>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
