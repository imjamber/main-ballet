import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import TimetableView from "@/components/timetable/TimetableView"
import { TIMETABLE, TIMETABLE_PDFS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Timetables | Fitchett Proll Dance",
  description: "Class timetables for all Fitchett Proll Dance studios across Lancashire.",
}

export default function TimetablesPage() {
  return (
    <div className="min-h-screen bg-cream">

      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Schedule"
            title="Timetables"
            subtitle="Browse classes by day. Use the search to find a specific class, studio, or age group."
            align="left"
            onDark
          />
        </div>
      </div>

      <section className="py-24 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <TimetableView sessions={TIMETABLE.sessions} note={TIMETABLE.note} />
        </div>
      </section>

      {/* PDF downloads as secondary resource */}
      <section className="bg-mist py-16 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-6">
          <div>
            <p className="font-sans text-xs tracking-[0.28em] uppercase text-champagne mb-3">Full PDF Timetables</p>
            <p className="font-sans text-stone text-sm">Download complete timetables including all studios and show schedules.</p>
          </div>
          <div className="flex flex-col gap-3">
            {TIMETABLE_PDFS.map((pdf) => (
              <a
                key={pdf.label}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-sans text-sm text-stone hover:text-rose transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {pdf.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
