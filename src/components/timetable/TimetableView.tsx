"use client"

import { useState } from "react"

interface Session {
  day: string
  time: string
  studio: string
  class: string
  ageGroup: string
}

interface TimetableViewProps {
  sessions: Session[]
  note: string
}

const DAY_ORDER = ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

export default function TimetableView({ sessions, note }: TimetableViewProps) {
  const days = DAY_ORDER.filter((d) => sessions.some((s) => s.day === d))
  const [activeDay, setActiveDay] = useState(days[0] ?? "Saturday")
  const [search, setSearch] = useState("")

  const filtered = sessions.filter((s) => {
    const matchDay = s.day === activeDay
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      s.class.toLowerCase().includes(q) ||
      s.studio.toLowerCase().includes(q) ||
      s.ageGroup.toLowerCase().includes(q)
    return matchDay && matchSearch
  })

  // Sort by time
  const sorted = [...filtered].sort((a, b) => {
    const toMins = (t: string) => {
      const [h, m] = t.split(":").map(Number)
      return h * 60 + (m || 0)
    }
    return toMins(a.time) - toMins(b.time)
  })

  return (
    <div className="flex flex-col gap-6">
      {/* Day tabs */}
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => { setActiveDay(day); setSearch("") }}
            className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-200 ${
              activeDay === day
                ? "bg-rose text-cream"
                : "bg-mist text-stone hover:bg-blush hover:text-rose border border-transparent"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search class, studio, age group…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-72 bg-transparent border border-ink/20 text-ink px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-rose transition-colors placeholder:text-ink/30"
      />

      {/* Table */}
      {sorted.length === 0 ? (
        <p className="font-sans text-stone text-sm py-8">No classes found for that search.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b-2 border-ink/10">
                <th className="text-left py-3 pr-6 font-sans text-xs tracking-widest uppercase text-champagne w-20">Time</th>
                <th className="text-left py-3 pr-6 font-sans text-xs tracking-widest uppercase text-champagne">Class</th>
                <th className="text-left py-3 pr-6 font-sans text-xs tracking-widest uppercase text-champagne hidden sm:table-cell">Studio</th>
                <th className="text-left py-3     font-sans text-xs tracking-widest uppercase text-champagne hidden md:table-cell">Age Group</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s, i) => (
                <tr
                  key={i}
                  className="border-b border-ink/6 hover:bg-blush transition-colors duration-150"
                >
                  <td className="py-3.5 pr-6 font-sans text-rose font-medium tabular-nums">{s.time}</td>
                  <td className="py-3.5 pr-6 font-serif text-ink text-base">{s.class}</td>
                  <td className="py-3.5 pr-6 text-stone hidden sm:table-cell">{s.studio}</td>
                  <td className="py-3.5     text-stone hidden md:table-cell">{s.ageGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {note && (
        <p className="font-sans text-stone/70 text-xs leading-relaxed border-l-2 border-rose/30 pl-4 mt-2">
          {note}
        </p>
      )}
    </div>
  )
}
