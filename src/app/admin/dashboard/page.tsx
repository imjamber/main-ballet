"use client"

import { useState, useEffect, useCallback } from "react"

// ── Types ──────────────────────────────────────────────────────────────────
interface SiteInfo { schoolName: string; schoolFullName: string; phone: string; email: string; weekdayHours: string; saturdayHours: string; tagline: string }
interface Discipline { name: string; age: string; description: string }
interface AdultDiscipline { name: string; description: string }
interface Studio { name: string; url: string | null; day: string }
interface FacultyMember { name: string; role: string }
interface WhyUsItem { heading: string; body: string }
interface TimetableSession { day: string; time: string; studio: string; class: string; ageGroup: string }
interface FeeRow { level: string; ballet: string; tap: string; modern: string; contemporary: string; acrobatic: string }
interface UniformCat { category: string; items: string[] }
interface Content {
  siteInfo: SiteInfo
  disciplines: Discipline[]
  adultDisciplines: AdultDiscipline[]
  studios: Studio[]
  faculty: FacultyMember[]
  guestTeachers: string[]
  receptionStaff: string[]
  whyUs: WhyUsItem[]
  timetable: { note: string; sessions: TimetableSession[] }
  fees: { note: string; contactNote: string; rows: FeeRow[] }
  uniform: UniformCat[]
}

type Tab = "site" | "classes" | "adult" | "studios" | "faculty" | "whyus" | "timetable" | "fees" | "uniform"

const TABS: { id: Tab; label: string }[] = [
  { id: "site",      label: "Site Info" },
  { id: "classes",   label: "Children's Classes" },
  { id: "adult",     label: "Adult Classes" },
  { id: "studios",   label: "Studios" },
  { id: "faculty",   label: "Faculty" },
  { id: "whyus",     label: "Why Us" },
  { id: "timetable", label: "Timetable" },
  { id: "fees",      label: "Fees" },
  { id: "uniform",   label: "Uniform" },
]

const DAY_ORDER = ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// ── Helpers ────────────────────────────────────────────────────────────────
function Field({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  const cls = "w-full bg-transparent border border-cream/20 text-cream px-3 py-2 text-sm font-sans focus:outline-none focus:border-rose transition-colors"
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs tracking-wider uppercase text-cream/40">{label}</span>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={2} className={cls + " resize-none"} />
        : <input value={value} onChange={e => onChange(e.target.value)} className={cls} />
      }
    </label>
  )
}

function AddBtn({ onClick, label = "Add" }: { onClick: () => void; label?: string }) {
  return (
    <button onClick={onClick} className="font-sans text-xs tracking-widest uppercase border border-champagne/40 text-champagne px-4 py-2 hover:border-champagne hover:text-champagne transition-colors">
      + {label}
    </button>
  )
}

function RemoveBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="font-sans text-xs text-cream/30 hover:text-red-400 transition-colors px-2 py-1 shrink-0">✕</button>
  )
}

// ── Dashboard ──────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [content, setContent]   = useState<Content | null>(null)
  const [tab, setTab]           = useState<Tab>("site")
  const [dirty, setDirty]       = useState(false)
  const [saving, setSaving]     = useState(false)
  const [saveMsg, setSaveMsg]   = useState("")
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetch("/api/admin/content")
      .then(r => r.json())
      .then(d => { setContent(d); setLoading(false) })
  }, [])

  const update = useCallback((fn: (c: Content) => Content) => {
    setContent(prev => prev ? fn(prev) : prev)
    setDirty(true)
    setSaveMsg("")
  }, [])

  const publish = async () => {
    if (!content) return
    setSaving(true)
    setSaveMsg("")
    const res = await fetch("/api/admin/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
    setSaving(false)
    if (res.ok) {
      setDirty(false)
      setSaveMsg("Published! Site will update in ~60 seconds.")
    } else {
      const err = await res.json()
      setSaveMsg("Error: " + (err.error ?? "unknown"))
    }
  }

  if (loading || !content) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="w-6 h-6 border border-rose/40 border-t-rose rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ink text-cream font-sans flex flex-col">
      {/* Top bar */}
      <header className="border-b border-cream/10 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 bg-ink z-10">
        <div className="flex items-center gap-3">
          <span className="font-serif text-cream text-lg">Admin Panel</span>
          {dirty && <span className="font-sans text-xs text-champagne/70 tracking-wide">Unsaved changes</span>}
        </div>
        <div className="flex items-center gap-4">
          {saveMsg && (
            <span className={`font-sans text-xs ${saveMsg.startsWith("Error") ? "text-red-400" : "text-green-400"}`}>
              {saveMsg}
            </span>
          )}
          <button
            onClick={publish}
            disabled={!dirty || saving}
            className="font-sans text-xs tracking-widest uppercase bg-rose text-cream px-6 py-2.5 hover:bg-rose-light transition-colors disabled:opacity-40"
          >
            {saving ? "Publishing…" : "Publish Changes"}
          </button>
          <a href="/" target="_blank" className="font-sans text-xs text-cream/40 hover:text-cream transition-colors">
            View Site ↗
          </a>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-48 shrink-0 border-r border-cream/10 flex flex-col py-4 gap-1">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`text-left px-5 py-2.5 text-sm transition-colors ${tab === t.id ? "text-cream bg-cream/8 border-l-2 border-rose" : "text-cream/40 hover:text-cream/80 border-l-2 border-transparent"}`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-8 py-8">

          {/* ── SITE INFO ── */}
          {tab === "site" && (
            <Section title="Site Information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["schoolName","schoolFullName","phone","email","tagline","weekdayHours","saturdayHours"] as (keyof SiteInfo)[]).map(k => (
                  <Field key={k} label={k} value={content.siteInfo[k]} onChange={v => update(c => ({ ...c, siteInfo: { ...c.siteInfo, [k]: v } }))} />
                ))}
              </div>
            </Section>
          )}

          {/* ── CHILDREN'S CLASSES ── */}
          {tab === "classes" && (
            <Section title="Children's Classes">
              {content.disciplines.map((d, i) => (
                <Card key={i} onRemove={() => update(c => ({ ...c, disciplines: c.disciplines.filter((_, j) => j !== i) }))}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    <Field label="Name" value={d.name} onChange={v => update(c => ({ ...c, disciplines: c.disciplines.map((x, j) => j === i ? { ...x, name: v } : x) }))} />
                    <Field label="Age Range" value={d.age} onChange={v => update(c => ({ ...c, disciplines: c.disciplines.map((x, j) => j === i ? { ...x, age: v } : x) }))} />
                    <div className="sm:col-span-2">
                      <Field label="Description" value={d.description} multiline onChange={v => update(c => ({ ...c, disciplines: c.disciplines.map((x, j) => j === i ? { ...x, description: v } : x) }))} />
                    </div>
                  </div>
                </Card>
              ))}
              <AddBtn onClick={() => update(c => ({ ...c, disciplines: [...c.disciplines, { name: "", age: "", description: "" }] }))} label="Add Class" />
            </Section>
          )}

          {/* ── ADULT CLASSES ── */}
          {tab === "adult" && (
            <Section title="Adult Classes">
              {content.adultDisciplines.map((d, i) => (
                <Card key={i} onRemove={() => update(c => ({ ...c, adultDisciplines: c.adultDisciplines.filter((_, j) => j !== i) }))}>
                  <div className="flex flex-col gap-3 flex-1">
                    <Field label="Name" value={d.name} onChange={v => update(c => ({ ...c, adultDisciplines: c.adultDisciplines.map((x, j) => j === i ? { ...x, name: v } : x) }))} />
                    <Field label="Description" value={d.description} multiline onChange={v => update(c => ({ ...c, adultDisciplines: c.adultDisciplines.map((x, j) => j === i ? { ...x, description: v } : x) }))} />
                  </div>
                </Card>
              ))}
              <AddBtn onClick={() => update(c => ({ ...c, adultDisciplines: [...c.adultDisciplines, { name: "", description: "" }] }))} label="Add Class" />
            </Section>
          )}

          {/* ── STUDIOS ── */}
          {tab === "studios" && (
            <Section title="Studios">
              {content.studios.map((s, i) => (
                <Card key={i} onRemove={() => update(c => ({ ...c, studios: c.studios.filter((_, j) => j !== i) }))}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                    <Field label="Name" value={s.name} onChange={v => update(c => ({ ...c, studios: c.studios.map((x, j) => j === i ? { ...x, name: v } : x) }))} />
                    <Field label="Day(s)" value={s.day} onChange={v => update(c => ({ ...c, studios: c.studios.map((x, j) => j === i ? { ...x, day: v } : x) }))} />
                    <Field label="Website URL (or leave blank)" value={s.url ?? ""} onChange={v => update(c => ({ ...c, studios: c.studios.map((x, j) => j === i ? { ...x, url: v || null } : x) }))} />
                  </div>
                </Card>
              ))}
              <AddBtn onClick={() => update(c => ({ ...c, studios: [...c.studios, { name: "", day: "", url: null }] }))} label="Add Studio" />
            </Section>
          )}

          {/* ── FACULTY ── */}
          {tab === "faculty" && (
            <Section title="Teaching Faculty">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.faculty.map((f, i) => (
                  <div key={i} className="flex gap-2 items-center bg-cream/5 border border-cream/10 px-3 py-2">
                    <input value={f.name} onChange={e => update(c => ({ ...c, faculty: c.faculty.map((x, j) => j === i ? { ...x, name: e.target.value } : x) }))} placeholder="Name" className="flex-1 bg-transparent text-cream text-sm focus:outline-none placeholder:text-cream/20" />
                    <input value={f.role} onChange={e => update(c => ({ ...c, faculty: c.faculty.map((x, j) => j === i ? { ...x, role: e.target.value } : x) }))} placeholder="Role" className="w-28 bg-transparent text-cream/60 text-xs focus:outline-none placeholder:text-cream/20" />
                    <RemoveBtn onClick={() => update(c => ({ ...c, faculty: c.faculty.filter((_, j) => j !== i) }))} />
                  </div>
                ))}
              </div>
              <AddBtn onClick={() => update(c => ({ ...c, faculty: [...c.faculty, { name: "", role: "Teacher" }] }))} label="Add Teacher" />

              <div className="mt-8 pt-6 border-t border-cream/10">
                <p className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-3">Guest Teachers</p>
                <div className="flex flex-wrap gap-2">
                  {content.guestTeachers.map((g, i) => (
                    <div key={i} className="flex gap-1 items-center bg-cream/5 border border-cream/10 px-3 py-1.5">
                      <input value={g} onChange={e => update(c => ({ ...c, guestTeachers: c.guestTeachers.map((x, j) => j === i ? e.target.value : x) }))} className="bg-transparent text-cream text-sm focus:outline-none w-40" />
                      <RemoveBtn onClick={() => update(c => ({ ...c, guestTeachers: c.guestTeachers.filter((_, j) => j !== i) }))} />
                    </div>
                  ))}
                  <AddBtn onClick={() => update(c => ({ ...c, guestTeachers: [...c.guestTeachers, ""] }))} />
                </div>
              </div>
            </Section>
          )}

          {/* ── WHY US ── */}
          {tab === "whyus" && (
            <Section title="Why Choose Us">
              {content.whyUs.map((w, i) => (
                <Card key={i} onRemove={() => update(c => ({ ...c, whyUs: c.whyUs.filter((_, j) => j !== i) }))}>
                  <div className="flex flex-col gap-3 flex-1">
                    <Field label="Heading" value={w.heading} onChange={v => update(c => ({ ...c, whyUs: c.whyUs.map((x, j) => j === i ? { ...x, heading: v } : x) }))} />
                    <Field label="Body" value={w.body} multiline onChange={v => update(c => ({ ...c, whyUs: c.whyUs.map((x, j) => j === i ? { ...x, body: v } : x) }))} />
                  </div>
                </Card>
              ))}
              <AddBtn onClick={() => update(c => ({ ...c, whyUs: [...c.whyUs, { heading: "", body: "" }] }))} label="Add Point" />
            </Section>
          )}

          {/* ── TIMETABLE ── */}
          {tab === "timetable" && (
            <Section title="Timetable">
              <Field label="Note shown to visitors" value={content.timetable.note} multiline onChange={v => update(c => ({ ...c, timetable: { ...c.timetable, note: v } }))} />
              <div className="mt-6 flex flex-col gap-2">
                <div className="grid grid-cols-[100px_90px_1fr_1fr_1fr_32px] gap-2 px-2">
                  {["Day","Time","Studio","Class","Age Group",""].map(h => (
                    <span key={h} className="font-sans text-xs uppercase tracking-widest text-cream/30">{h}</span>
                  ))}
                </div>
                {[...content.timetable.sessions]
                  .sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day) || a.time.localeCompare(b.time))
                  .map((s, i) => {
                    const realIdx = content.timetable.sessions.indexOf(s)
                    return (
                      <div key={realIdx} className="grid grid-cols-[100px_90px_1fr_1fr_1fr_32px] gap-2 items-center bg-cream/5 border border-cream/8 px-2 py-1.5">
                        <select value={s.day} onChange={e => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.map((x, j) => j === realIdx ? { ...x, day: e.target.value } : x) } }))} className="bg-ink border-none text-cream text-xs focus:outline-none">
                          {DAY_ORDER.map(d => <option key={d}>{d}</option>)}
                        </select>
                        <input value={s.time} onChange={e => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.map((x, j) => j === realIdx ? { ...x, time: e.target.value } : x) } }))} placeholder="9:00" className="bg-transparent text-cream text-sm focus:outline-none font-mono" />
                        <input value={s.studio} onChange={e => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.map((x, j) => j === realIdx ? { ...x, studio: e.target.value } : x) } }))} className="bg-transparent text-cream text-sm focus:outline-none" />
                        <input value={s.class} onChange={e => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.map((x, j) => j === realIdx ? { ...x, class: e.target.value } : x) } }))} className="bg-transparent text-cream text-sm focus:outline-none" />
                        <input value={s.ageGroup} onChange={e => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.map((x, j) => j === realIdx ? { ...x, ageGroup: e.target.value } : x) } }))} className="bg-transparent text-cream/60 text-xs focus:outline-none" />
                        <RemoveBtn onClick={() => update(c => ({ ...c, timetable: { ...c.timetable, sessions: c.timetable.sessions.filter((_, j) => j !== realIdx) } }))} />
                      </div>
                    )
                  })}
              </div>
              <AddBtn onClick={() => update(c => ({ ...c, timetable: { ...c.timetable, sessions: [...c.timetable.sessions, { day: "Saturday", time: "9:00", studio: "", class: "", ageGroup: "" }] } }))} label="Add Session" />
            </Section>
          )}

          {/* ── FEES ── */}
          {tab === "fees" && (
            <Section title="Class Fees">
              <div className="flex flex-col gap-4">
                <Field label="Payment note" value={content.fees.note} multiline onChange={v => update(c => ({ ...c, fees: { ...c.fees, note: v } }))} />
                <Field label="Contact note" value={content.fees.contactNote} multiline onChange={v => update(c => ({ ...c, fees: { ...c.fees, contactNote: v } }))} />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="grid grid-cols-[1fr_80px_80px_80px_100px_100px_32px] gap-2 px-2">
                  {["Level","Ballet","Tap","Modern","Contemporary","Acrobatic",""].map(h => (
                    <span key={h} className="font-sans text-xs uppercase tracking-widest text-cream/30">{h}</span>
                  ))}
                </div>
                {content.fees.rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_80px_80px_80px_100px_100px_32px] gap-2 items-center bg-cream/5 border border-cream/8 px-2 py-1.5">
                    <input value={row.level} onChange={e => update(c => ({ ...c, fees: { ...c.fees, rows: c.fees.rows.map((x, j) => j === i ? { ...x, level: e.target.value } : x) } }))} className="bg-transparent text-cream text-sm focus:outline-none" />
                    {(["ballet","tap","modern","contemporary","acrobatic"] as (keyof FeeRow)[]).map(k => (
                      <input key={k} value={row[k]} onChange={e => update(c => ({ ...c, fees: { ...c.fees, rows: c.fees.rows.map((x, j) => j === i ? { ...x, [k]: e.target.value } : x) } }))} className="bg-transparent text-cream/80 text-sm focus:outline-none text-center font-mono" />
                    ))}
                    <RemoveBtn onClick={() => update(c => ({ ...c, fees: { ...c.fees, rows: c.fees.rows.filter((_, j) => j !== i) } }))} />
                  </div>
                ))}
              </div>
              <AddBtn onClick={() => update(c => ({ ...c, fees: { ...c.fees, rows: [...c.fees.rows, { level: "", ballet: "–", tap: "–", modern: "–", contemporary: "–", acrobatic: "–" }] } }))} label="Add Row" />
            </Section>
          )}

          {/* ── UNIFORM ── */}
          {tab === "uniform" && (
            <Section title="Uniform">
              {content.uniform.map((cat, i) => (
                <Card key={i} onRemove={() => update(c => ({ ...c, uniform: c.uniform.filter((_, j) => j !== i) }))}>
                  <div className="flex flex-col gap-3 flex-1">
                    <Field label="Category" value={cat.category} onChange={v => update(c => ({ ...c, uniform: c.uniform.map((x, j) => j === i ? { ...x, category: v } : x) }))} />
                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-xs uppercase tracking-widest text-cream/30">Items</span>
                      {cat.items.map((item, k) => (
                        <div key={k} className="flex gap-2 items-center">
                          <input value={item} onChange={e => update(c => ({ ...c, uniform: c.uniform.map((x, j) => j === i ? { ...x, items: x.items.map((y, l) => l === k ? e.target.value : y) } : x) }))} className="flex-1 bg-transparent border-b border-cream/10 text-cream text-sm focus:outline-none py-1" />
                          <RemoveBtn onClick={() => update(c => ({ ...c, uniform: c.uniform.map((x, j) => j === i ? { ...x, items: x.items.filter((_, l) => l !== k) } : x) }))} />
                        </div>
                      ))}
                      <button onClick={() => update(c => ({ ...c, uniform: c.uniform.map((x, j) => j === i ? { ...x, items: [...x.items, ""] } : x) }))} className="self-start font-sans text-xs text-champagne/60 hover:text-champagne mt-1">+ item</button>
                    </div>
                  </div>
                </Card>
              ))}
              <AddBtn onClick={() => update(c => ({ ...c, uniform: [...c.uniform, { category: "", items: [] }] }))} label="Add Category" />
            </Section>
          )}
        </main>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h2 className="font-serif text-xl text-cream">{title}</h2>
        <div className="w-6 h-px bg-rose mt-2" />
      </div>
      {children}
    </div>
  )
}

function Card({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className="flex gap-3 items-start bg-cream/5 border border-cream/10 p-4">
      {children}
      <RemoveBtn onClick={onRemove} />
    </div>
  )
}
