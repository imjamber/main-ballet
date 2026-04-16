import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { WHY_US } from "@/lib/constants"

export default function WhyUs() {
  return (
    <section className="bg-ink py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left — heading + intro */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A School Built on Excellence"
            subtitle="Nearly 80 years of dance education across Lancashire. We hold ourselves to the highest standards — because your children deserve nothing less."
            align="left"
            onDark
          />
          <p className="font-sans text-cream/40 text-sm leading-relaxed max-w-sm mt-4">
            Whether you&apos;re a beginner just starting out or an advanced dancer seeking vocational training, consider your dance goals now within reach.
          </p>
        </div>

        {/* Right — pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {WHY_US.map((item, i) => (
            <AnimatedSection key={item.heading} delay={i * 0.08}>
              <div className="flex flex-col gap-2 border-l-2 border-rose/40 pl-5">
                <span className="font-sans text-champagne text-xs tracking-widest uppercase">
                  {item.heading}
                </span>
                <p className="font-sans text-cream/55 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
