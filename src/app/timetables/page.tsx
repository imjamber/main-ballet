import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import TimetableView from "@/components/timetable/TimetableView"
import { TIMETABLE } from "@/lib/constants"

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
    </div>
  )
}
