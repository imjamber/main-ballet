import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { DISCIPLINES } from "@/lib/constants"

export default function ClassesSection() {
  return (
    <section className="bg-mist py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">

        <SectionHeading
          eyebrow="What We Offer"
          title="Classes for Every Stage"
          subtitle="Term-time classes across all disciplines, taught by qualified and experienced professionals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCIPLINES.map((disc, i) => (
            <AnimatedSection key={disc.name} delay={i * 0.06}>
              <div className="group bg-cream border-t-2 border-transparent hover:border-rose p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-md h-full">
                <span className="font-sans text-champagne text-xs tracking-widest uppercase">
                  {disc.age}
                </span>
                <h3 className="font-serif text-xl text-ink leading-snug">{disc.name}</h3>
                <div className="w-5 h-px bg-rose/40 group-hover:w-10 group-hover:bg-rose transition-all duration-300" />
                <p className="font-sans text-stone text-sm leading-relaxed flex-1">
                  {disc.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/classes"
            className="font-sans text-xs tracking-widest uppercase border border-rose text-rose px-8 py-3 hover:bg-rose hover:text-cream transition-colors duration-300"
          >
            Children&apos;s Classes
          </Link>
          <Link
            href="/adult-classes"
            className="font-sans text-xs tracking-widest uppercase border border-ink text-ink px-8 py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Adult Classes
          </Link>
        </div>
      </div>
    </section>
  )
}
