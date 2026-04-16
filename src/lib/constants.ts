import data from "@/data/content.json"

// Re-exported from content.json so all pages continue to work
// and admin panel edits are reflected after rebuild.

const s = data.siteInfo
export const SCHOOL_NAME             = s.schoolName
export const SCHOOL_FULL_NAME        = s.schoolFullName
export const SCHOOL_EMAIL            = s.email
export const SCHOOL_PHONE            = s.phone
export const SCHOOL_HOURS_WEEKDAY    = s.weekdayHours
export const SCHOOL_HOURS_SAT        = s.saturdayHours
export const SCHOOL_TAGLINE          = s.tagline

export const NAV_LINKS = [
  { label: "Home",          href: "/" },
  { label: "Classes",       href: "/classes" },
  { label: "Adult Classes", href: "/adult-classes" },
  { label: "About",         href: "/about" },
  { label: "Faculty",       href: "/faculty" },
  { label: "Timetables",    href: "/timetables" },
  { label: "Fees",          href: "/fees" },
  { label: "Uniform",       href: "/uniform" },
  { label: "Contact",       href: "/contact" },
] as const

export const DISCIPLINES       = data.disciplines
export const ADULT_DISCIPLINES = data.adultDisciplines
export const STUDIOS           = data.studios
export const FACULTY           = data.faculty
export const GUEST_TEACHERS    = data.guestTeachers
export const RECEPTION_STAFF   = data.receptionStaff
export const WHY_US            = data.whyUs
export const TIMETABLE         = data.timetable
export const FEES              = data.fees
export const UNIFORM           = data.uniform
export const TIMETABLE_PDFS    = data.timetablePdfs
export const FEES_PDFS         = data.feesPdfs
export const UNIFORM_PDFS      = data.uniformPdfs
