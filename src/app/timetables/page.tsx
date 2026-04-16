import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { TIMETABLE_PDFS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Timetables | Fitchett Proll Dance",
  description: "View and download timetables for all Fitchett Proll Dance studios across Lancashire.",
}

export default function TimetablesPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Schedule"
            title="Timetables"
            subtitle="Click any timetable below to open or download the PDF."
            align="left"
            onDark
          />
        </div>
      </div>

      {/* PDFs */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {TIMETABLE_PDFS.map((pdf, i) => (
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

      {/* Info */}
      <section className="bg-mist py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { heading: "3 Terms", body: "The year is divided into three terms of 10 weeks each." },
            { heading: "Mon – Sat", body: "Classes run Monday through Saturday across our nine studios." },
            { heading: "All Levels", body: "Every timetable includes classes from beginner to advanced." },
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
