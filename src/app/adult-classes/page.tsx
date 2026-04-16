import type { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { ADULT_DISCIPLINES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Adult Classes | Fitchett Proll Dance",
  description:
    "Adult Ballet, Silver Swans® and Tap classes in Preston and Lancashire. For all levels and abilities — no experience necessary.",
}

const benefits = [
  { heading: "Flexibility & Posture", body: "Regular ballet and tap classes significantly improve posture, flexibility, and core strength." },
  { heading: "Bone Density", body: "Weight-bearing dance exercises are proven to help maintain and improve bone density." },
  { heading: "Cardiovascular Fitness", body: "Dance is a fun and effective aerobic workout — better than a treadmill, and with great music." },
  { heading: "Mental Wellbeing", body: "Learning and remembering movement sequences challenges the mind as well as the body." },
  { heading: "Social Connection", body: "Our adult classes are a friendly, welcoming community. Come along and make new friends." },
  { heading: "Coordination & Balance", body: "Especially valuable as we age — dance is one of the best activities for improving balance." },
]

export default function AdultClassesPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="16+ / Adults"
            title="Adult Ballet &amp; Tap Classes"
            subtitle="For all levels and abilities. Whether you're a complete beginner or a returning dancer — you're welcome here."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Classes */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
          <SectionHeading
            eyebrow="What We Offer"
            title="Adult Disciplines"
            subtitle="Classes are run at various studios across Lancashire — see our timetables for locations and times."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADULT_DISCIPLINES.map((disc, i) => (
              <AnimatedSection key={disc.name} delay={i * 0.1}>
                <div className="group flex flex-col gap-5 p-8 bg-mist border-t-2 border-transparent hover:border-rose transition-all duration-300 h-full">
                  <h3 className="font-serif text-2xl text-ink group-hover:text-rose transition-colors">
                    {disc.name}
                  </h3>
                  <div className="w-6 h-px bg-rose/40 group-hover:w-14 group-hover:bg-rose transition-all duration-300" />
                  <p className="font-sans text-stone text-sm leading-relaxed flex-1">
                    {disc.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Swans highlight */}
      <section className="bg-blush py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <span className="font-sans text-champagne tracking-[0.28em] uppercase text-xs">RAD Accredited</span>
              <h2 className="font-serif text-4xl text-ink leading-tight">Silver Swans®</h2>
              <div className="w-8 h-px bg-rose" />
              <p className="font-sans text-stone leading-relaxed">
                Silver Swans® is a Royal Academy of Dance programme designed specifically for people aged 55 and over. Classes are specially adapted to suit the needs and abilities of older adults, with a focus on improving mobility, strengthening muscles, and enhancing coordination and balance.
              </p>
              <p className="font-sans text-stone leading-relaxed">
                Come along, give it a try, and make new friends — no previous experience is necessary whatsoever.
              </p>
              <Link
                href="/contact"
                className="inline-flex self-start items-center justify-center bg-rose text-cream font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-rose-light transition-colors duration-300"
              >
                Find Out More
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "55+", label: "Minimum Age" },
                { stat: "RAD", label: "Accredited" },
                { stat: "All Levels", label: "Welcome" },
                { stat: "Friendly", label: "Community" },
              ].map((item) => (
                <div key={item.label} className="bg-cream p-6 flex flex-col gap-2">
                  <span className="font-serif text-3xl text-rose">{item.stat}</span>
                  <span className="font-sans text-stone text-xs tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ink py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
          <SectionHeading
            eyebrow="Why Dance?"
            title="The Benefits of Adult Dance"
            subtitle="Dance is one of the best things you can do for your mind and body at any age."
            onDark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.heading} delay={i * 0.07}>
                <div className="flex flex-col gap-2 border-l-2 border-rose/40 pl-5">
                  <span className="font-sans text-champagne text-xs tracking-widest uppercase">{item.heading}</span>
                  <p className="font-sans text-cream/55 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-serif text-4xl text-ink">Ready to start dancing?</h2>
          <p className="font-sans text-stone leading-relaxed">
            Contact us to find out which adult class is closest to you and fits your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/timetables"
              className="inline-flex items-center justify-center bg-rose text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-rose-light transition-colors"
            >
              View Timetables
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-ink text-ink font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-ink hover:text-cream transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
