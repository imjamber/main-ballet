import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { FEES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Fees | Fitchett Proll Dance",
  description: "Class fees and payment information for Sandham Fitchett Performing Arts.",
}

const COLUMNS = [
  { key: "ballet",       label: "Ballet" },
  { key: "tap",          label: "Tap" },
  { key: "modern",       label: "Modern / Street" },
  { key: "contemporary", label: "Contemporary" },
  { key: "acrobatic",    label: "Acrobatic" },
] as const

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-cream">

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

      {/* Fee table */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-ink/10">
                    <th className="text-left py-4 pr-6 font-sans text-xs tracking-widest uppercase text-champagne">Level</th>
                    {COLUMNS.map((col) => (
                      <th key={col.key} className="text-center py-4 px-3 font-sans text-xs tracking-widest uppercase text-champagne">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEES.rows.map((row, i) => (
                    <tr key={i} className={`border-b border-ink/6 ${i % 2 === 0 ? "" : "bg-mist/40"} hover:bg-blush transition-colors`}>
                      <td className="py-4 pr-6 font-serif text-ink text-base">{row.level}</td>
                      {COLUMNS.map((col) => {
                        const val = (row as Record<string, string>)[col.key]
                        return (
                          <td key={col.key} className={`py-4 px-3 text-center ${val === "–" ? "text-stone/30" : "text-rose font-medium"}`}>
                            {val}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-2 border-l-2 border-rose/30 pl-5">
            <p className="font-sans text-stone text-sm leading-relaxed">{FEES.note}</p>
            {FEES.contactNote && (
              <p className="font-sans text-stone/70 text-sm leading-relaxed">{FEES.contactNote}</p>
            )}
          </div>
        </div>
      </section>

      {/* Info boxes */}
      <section className="bg-mist py-16 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { heading: "3 Terms",      body: "The year is divided into three terms of 10 weeks each." },
            { heading: "Term in Advance", body: "Fees are due at the start of each term regardless of lessons attended." },
            { heading: "All Levels",   body: "Fees vary by discipline and level — see the table above for full details." },
          ].map((item) => (
            <div key={item.heading} className="flex flex-col gap-2 items-center">
              <span className="font-serif text-2xl text-rose">{item.heading}</span>
              <p className="font-sans text-stone text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
