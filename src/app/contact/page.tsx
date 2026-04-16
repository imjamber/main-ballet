import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import ContactForm from "@/components/contact/ContactForm"
import { SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_HOURS_WEEKDAY, SCHOOL_HOURS_SAT, STUDIOS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us | Fitchett Proll Dance",
  description: "Get in touch with Sandham Fitchett Performing Arts. Phone, email, or use our contact form.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            subtitle="Please telephone or message direct — or use the form below."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Contact info + form */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — info */}
          <AnimatedSection>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-champagne text-xs tracking-[0.28em] uppercase">Phone</span>
                <a
                  href={`tel:${SCHOOL_PHONE.replace(/\s/g, "")}`}
                  className="font-serif text-4xl text-ink hover:text-rose transition-colors"
                >
                  {SCHOOL_PHONE}
                </a>
                <p className="font-sans text-stone text-sm leading-relaxed">
                  Please telephone or message direct — we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="h-px bg-ink/10" />

              <div className="flex flex-col gap-3">
                <span className="font-sans text-champagne text-xs tracking-[0.28em] uppercase">Email</span>
                <a
                  href={`mailto:${SCHOOL_EMAIL}`}
                  className="font-sans text-ink text-base hover:text-rose transition-colors"
                >
                  {SCHOOL_EMAIL}
                </a>
              </div>

              <div className="h-px bg-ink/10" />

              <div className="flex flex-col gap-3">
                <span className="font-sans text-champagne text-xs tracking-[0.28em] uppercase">Opening Hours</span>
                <p className="font-sans text-stone text-sm">{SCHOOL_HOURS_WEEKDAY}</p>
                <p className="font-sans text-stone text-sm">{SCHOOL_HOURS_SAT}</p>
              </div>

              <div className="h-px bg-ink/10" />

              <div className="flex flex-col gap-4">
                <span className="font-sans text-champagne text-xs tracking-[0.28em] uppercase">Our Studios</span>
                <div className="grid grid-cols-2 gap-2">
                  {STUDIOS.map((s) => (
                    <div key={s.name} className="flex flex-col">
                      <span className="font-sans text-ink text-sm">{s.name}</span>
                      <span className="font-sans text-stone text-xs">{s.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl text-ink mb-2">Send us a message</h2>
                <div className="w-8 h-px bg-rose" />
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
