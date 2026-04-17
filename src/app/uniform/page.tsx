import type { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
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
            subtitle="All students are required to wear the correct regulation uniform for their class."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-stone leading-relaxed text-center">
            Uniform is available to purchase through our online shop or directly at the Preston studio on Saturdays. Please contact us for current pricing.
          </p>
        </div>
      </section>

      {/* Uniform guide */}
      <section className="bg-mist py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Guide"
            title="Uniform by Discipline"
            subtitle="A general guide to regulation uniform by discipline and level."
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
