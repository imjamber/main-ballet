import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { FEES_PDFS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Fees | Fitchett Proll Dance",
  description: "Class fees and payment information for Sandham Fitchett Performing Arts.",
}

const feeInfo = [
  {
    heading: "Payable a Term in Advance",
    body: "Fees are due at the start of each term, regardless of lessons attended during that term.",
  },
  {
    heading: "10 Weeks per Term",
    body: "Each term is 10 weeks long, with 3 terms per academic year.",
  },
  {
    heading: "Multiple Class Discounts",
    body: "Discounts are available for students attending multiple classes. Please contact us for details.",
  },
  {
    heading: "Payment Methods",
    body: "Fees can be paid in person at reception or by bank transfer. Please contact us to arrange payment.",
  },
]

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Pricing"
            title="Class Fees"
            subtitle="Fees are payable a term in advance. Each term is 10 weeks, with 3 terms per year."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* PDF download */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <p className="font-sans text-stone leading-relaxed">
            The current fee schedule is available as a PDF below. Fees vary by discipline and level — please download for full details.
          </p>

          {FEES_PDFS.map((pdf, i) => (
            <AnimatedSection key={pdf.label} delay={i * 0.08}>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 p-7 bg-mist border border-transparent hover:border-rose hover:bg-blush transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-rose/10 group-hover:bg-rose/20 rounded flex items-center justify-center shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-sans text-ink text-sm group-hover:text-rose transition-colors">{pdf.label}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-sans text-stone text-xs tracking-widest uppercase hidden sm:block">PDF</span>
                  <svg className="w-4 h-4 text-stone group-hover:text-rose transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Fee info grid */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="How It Works"
            title="Fee Information"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {feeInfo.map((item, i) => (
              <AnimatedSection key={item.heading} delay={i * 0.08}>
                <div className="bg-cream p-7 flex flex-col gap-3 border-l-2 border-rose/40 hover:border-rose transition-colors">
                  <span className="font-sans text-champagne text-xs tracking-widest uppercase">{item.heading}</span>
                  <p className="font-sans text-stone text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
