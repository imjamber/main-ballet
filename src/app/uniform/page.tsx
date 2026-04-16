import type { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { UNIFORM_PDFS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Uniform | Fitchett Proll Dance",
  description: "Regulation uniform requirements and price list for Sandham Fitchett Performing Arts students.",
}

const uniformItems = [
  { category: "Ballet (Beginners)", items: ["Pink regulation leotard", "Pink ballet tights", "Pink ballet shoes", "Pink crossover cardigan (optional)"] },
  { category: "Ballet (Junior)", items: ["Regulation leotard", "Ballet tights", "Ballet shoes", "RAD-approved uniform where applicable"] },
  { category: "Ballet (Senior)", items: ["Black leotard", "Black tights or footless tights", "Ballet shoes or pointe shoes"] },
  { category: "Tap", items: ["Black leotard", "Tap shoes (white Velcro for young children)", "Black skirt (juniors)"] },
  { category: "Modern / Street", items: ["Black leotard", "Black jazz trousers or shorts", "Jazz shoes or bare feet"] },
  { category: "Accessories", items: ["School drawstring bag", "Junior personalised hoodie", "Senior personalised hoodie"] },
]

export default function UniformPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Uniform"
            title="Regulation Uniform"
            subtitle="All students are required to wear the correct regulation uniform for their class. Please download the full price list below."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* PDF */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <p className="font-sans text-stone leading-relaxed">
            Uniform is available to purchase through our online shop or directly at the Preston studio on Saturdays. The full price list is available below.
          </p>

          {UNIFORM_PDFS.map((pdf, i) => (
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

      {/* Uniform guide */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Guide"
            title="Uniform by Discipline"
            subtitle="A general guide — the full regulation list is in the PDF above."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uniformItems.map((cat, i) => (
              <AnimatedSection key={cat.category} delay={i * 0.07}>
                <div className="bg-cream p-7 flex flex-col gap-4 h-full">
                  <span className="font-sans text-champagne text-xs tracking-widest uppercase">{cat.category}</span>
                  <div className="w-6 h-px bg-rose/40" />
                  <ul className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-rose shrink-0 mt-2" />
                        <span className="font-sans text-stone text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shop link */}
      <section className="py-20 px-6 md:px-10 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl text-ink">Need to purchase uniform?</h2>
          <p className="font-sans text-stone text-sm leading-relaxed">
            Uniform items are available from our online shop or in person at Preston on Saturdays.
            Contact us if you have any queries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-rose text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-rose-light transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
