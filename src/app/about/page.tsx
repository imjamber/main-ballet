import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"

export const metadata: Metadata = {
  title: "About Us | Fitchett Proll Dance",
  description:
    "The story of Sandham Fitchett Performing Arts — a third-generation dance school established in Preston, Lancashire in 1946.",
}

const timeline = [
  {
    year: "1936",
    heading: "The School is Founded",
    body: "Fitchett Proll Dance School was established by Margaret Sandham, creating a home for dance education in Lancashire.",
  },
  {
    year: "1958",
    heading: "Heather Fitchett Joins",
    body: "Having completed her training at the prestigious Royal Ballet School, Heather Fitchett became a partner alongside her former teacher, Miss Sandham.",
  },
  {
    year: "1988",
    heading: "Margaret Sandham Passes",
    body: "Heather Fitchett carried the school forward alone following the passing of its founder, and was later invited to become an examiner for the British Ballet Organisation.",
  },
  {
    year: "2023",
    heading: "A New Generation",
    body: "Following Heather Fitchett's passing in 2023, the school continues under the direction of her daughter, Martine Proll — going from strength to strength.",
  },
  {
    year: "Today",
    heading: "Third Generation",
    body: "Martine's daughter, Miss Melissa, now also teaches at Fitchett Proll — carrying forward the family legacy of excellence in dance education.",
  },
]

const achievements = [
  "Former pupils have performed with ballet companies, in West End productions, on cruise liners, in pantomimes, and on television.",
  "We regularly invite guest teachers of national and international reputation to inspire and coach our students.",
  "Examinations offered in Classical Ballet, Pointe, Tap, Modern Jazz, Musical Theatre, Street Dance, Contemporary, Classical Acrobatic Dance, and Modelling through the BTDA.",
  "As a special welcome, our beginner pupils receive a storybook introducing them to the world of Fitchett Proll.",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Page banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Our Story"
            title="About Fitchett Proll Dance"
            subtitle="A third-generation school with nearly 90 years of dance education across Preston and Lancashire."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Story intro */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl text-ink">
                Preston&apos;s longest-standing dance school
              </h2>
              <div className="w-8 h-px bg-rose" />
              <p className="font-sans text-stone leading-relaxed">
                What began as a single dance school in 1936 has grown into one of Lancashire&apos;s most respected performing arts institutions. With nine studios across the county and a dedicated team of qualified teachers, we now serve hundreds of students each week — from the very youngest babies to adults and those pursuing professional careers.
              </p>
              <p className="font-sans text-stone leading-relaxed">
                The highest standards of self-discipline are expected from all pupils, while individual expression and a love of dance are encouraged at every level. We believe that dance is for everyone — and we mean it.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "1936", label: "Year Founded" },
                { stat: "9", label: "Studios" },
                { stat: "100%", label: "BTDA Pass Rate" },
                { stat: "3rd", label: "Generation" },
              ].map((item) => (
                <div key={item.stat} className="bg-mist p-6 flex flex-col gap-2">
                  <span className="font-serif text-4xl text-rose">{item.stat}</span>
                  <span className="font-sans text-stone text-xs tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
          <SectionHeading
            eyebrow="History"
            title="Our Journey"
            subtitle="From a single studio in 1936 to a nine-location performing arts school."
          />
          <div className="flex flex-col gap-0">
            {timeline.map((entry, i) => (
              <AnimatedSection key={entry.year} delay={i * 0.08}>
                <div className="grid grid-cols-[5rem_1px_1fr] gap-x-8 pb-10 last:pb-0">
                  <span className="font-serif text-rose text-xl pt-1 text-right pr-2">{entry.year}</span>
                  <div className="flex flex-col items-center">
                    <div className="w-px flex-1 bg-rose/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-rose shrink-0 my-1" />
                    <div className="w-px flex-1 bg-rose/20 last:hidden" />
                  </div>
                  <div className="flex flex-col gap-1 pb-2">
                    <h3 className="font-serif text-lg text-ink">{entry.heading}</h3>
                    <p className="font-sans text-stone text-sm leading-relaxed">{entry.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            eyebrow="Achievements"
            title="Where Our Students Go"
            align="left"
          />
          <div className="flex flex-col gap-6">
            {achievements.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-5 items-start border-l-2 border-rose/30 pl-5">
                  <p className="font-sans text-stone text-sm leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
