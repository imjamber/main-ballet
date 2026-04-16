import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { FACULTY, GUEST_TEACHERS, RECEPTION_STAFF } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Teaching Faculty | Fitchett Proll Dance",
  description:
    "Meet the talented and dedicated teaching team at Sandham Fitchett Performing Arts, Preston.",
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Our Team"
            title="Teaching Faculty"
            subtitle="An exceptionally talented and dedicated long-term teaching faculty, fully registered with the BTDA and RAD."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Faculty grid */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16">

          <SectionHeading
            eyebrow="Teachers"
            title="Our Faculty"
            subtitle="All our teachers are professionally qualified and DBS checked. Many have been with us for years."
          />

          {/* Principal */}
          <AnimatedSection>
            <div className="bg-rose text-cream p-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-sans text-cream/60 tracking-[0.25em] uppercase text-xs">Principal</span>
                <h2 className="font-serif text-4xl font-normal">Martine Proll</h2>
                <div className="w-8 h-px bg-cream/40 mt-1" />
                <p className="font-sans text-cream/75 text-sm leading-relaxed max-w-lg mt-2">
                  Daughter of the late Heather Fitchett, Martine Proll now leads the school into its next generation. Under her direction, the school continues to maintain the exceptional standards of dance education that have defined Fitchett Proll for nearly 90 years.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Teaching staff */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {FACULTY.filter((f) => f.role !== "Principal").map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <div className="group p-6 bg-mist border border-transparent hover:border-rose hover:bg-blush transition-all duration-300 flex flex-col gap-2">
                  <div className="w-5 h-px bg-rose/40 group-hover:w-10 group-hover:bg-rose transition-all duration-300 mb-1" />
                  <span className="font-serif text-lg text-ink group-hover:text-rose transition-colors">
                    {member.name}
                  </span>
                  <span className="font-sans text-stone text-xs tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Guest teachers */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Special Guests"
            title="Guest Teachers"
            subtitle="We regularly invite guest teachers of national and international reputation to inspire and coach our students."
          />
          <div className="flex flex-wrap gap-4 justify-center">
            {GUEST_TEACHERS.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className="bg-cream border border-rose/20 px-8 py-4 font-serif text-xl text-ink">
                  {name}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reception */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Administration"
            title="Reception Team"
            subtitle="Our friendly reception team are on hand every Saturday at Preston and throughout the week."
          />
          <div className="flex flex-wrap gap-4 justify-center">
            {RECEPTION_STAFF.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className="bg-mist border border-transparent px-8 py-4 font-sans text-stone text-sm tracking-wide">
                  {name}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BTDA / RAD callout */}
      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-sans text-champagne tracking-[0.3em] uppercase text-xs">Accreditation</span>
          <h2 className="font-serif text-4xl text-cream font-normal">
            Fully Registered with BTDA &amp; RAD
          </h2>
          <div className="w-8 h-px bg-rose" />
          <p className="font-sans text-cream/55 text-base leading-relaxed max-w-lg">
            Our school offers vocational and GCSE-equivalent qualifications in Ballet, Tap and Modern Dance, along with accredited examinations in Classical Acrobatic Dance and Contemporary Dance. We take pride in delivering high-quality dance education that nurtures technical excellence, creativity, and confidence in every student.
          </p>
        </div>
      </section>
    </div>
  )
}
