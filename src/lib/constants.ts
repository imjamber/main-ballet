export const SCHOOL_NAME = "Fitchett Proll Dance"
export const SCHOOL_FULL_NAME = "Sandham Fitchett Performing Arts"
export const SCHOOL_ESTABLISHED = "1946"
export const SCHOOL_EMAIL = "info@fitchettproll.co.uk"
export const SCHOOL_PHONE = "07770 233007"
export const SCHOOL_HOURS_WEEKDAY = "Monday – Friday: 8:00am – 8:00pm"
export const SCHOOL_HOURS_SAT = "Saturday: 8:00am – 4:00pm"
export const SCHOOL_TAGLINE = "Preston's Premier Dance School — Established 1946"

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

export const DISCIPLINES = [
  {
    name: "Classical Ballet",
    age: "All ages",
    description:
      "RAD-affiliated syllabus training from absolute beginner through to vocational level. A foundation for all dance.",
  },
  {
    name: "Pointes",
    age: "Advanced students",
    description:
      "Pointe work for students who have developed the strength and technique to progress safely under expert guidance.",
  },
  {
    name: "Tap",
    age: "All ages",
    description:
      "Rhythm, coordination, and that unmistakeable sound. Classes for all levels from beginner upwards.",
  },
  {
    name: "Modern Jazz",
    age: "5 years+",
    description:
      "Contemporary movement, performance energy, and style — a hugely popular class across all our studios.",
  },
  {
    name: "Street Dance",
    age: "5 years+",
    description:
      "Urban movement vocabulary in an energetic and enjoyable class environment. Great for confidence and coordination.",
  },
  {
    name: "Contemporary Dance",
    age: "10 years+",
    description:
      "Expressive, floor-based, and technically demanding. BTDA-accredited examinations available.",
  },
  {
    name: "Classical Acrobatic Dance",
    age: "All ages",
    description:
      "BTDA-accredited acrobatic technique combined with classical training. A unique and exciting discipline.",
  },
  {
    name: "Disco",
    age: "5 years+",
    description:
      "Fun, energetic classes combining popular music with dance technique. A favourite with younger students.",
  },
] as const

export const ADULT_DISCIPLINES = [
  {
    name: "Adult Ballet",
    description:
      "Classical ballet for adult beginners and returners. Improve flexibility, posture, and coordination while enjoying beautiful music.",
  },
  {
    name: "Silver Swans®",
    description:
      "RAD Silver Swans® classes designed specifically for the over-55s. Improve bone density, balance, and wellbeing — and make new friends.",
  },
  {
    name: "Adult Tap",
    description:
      "Fun, sociable, and surprisingly good exercise. Come along and give it a try — no experience necessary.",
  },
] as const

export const STUDIOS = [
  { name: "Preston",               url: "https://www.fitchettproll.co.uk/",           day: "Saturdays" },
  { name: "Fulwood",               url: "https://www.danceschoolfulwood.co.uk/",      day: "Mondays" },
  { name: "Cottam",                url: "https://www.danceschoolcottam.co.uk/",       day: "Tuesdays" },
  { name: "Woodplumpton",          url: null,                                          day: "Tuesdays" },
  { name: "Blackburn with Darwen", url: "https://www.danceschoolblackburn.co.uk/",   day: "Wednesdays" },
  { name: "Longton",               url: "https://www.danceschoollongton.co.uk/",      day: "Wednesdays" },
  { name: "Bamber Bridge",         url: "https://www.danceschoolbamberbridge.co.uk/", day: "Thursdays" },
  { name: "Kirkham",               url: "https://www.danceschoolkirkham.co.uk/",      day: "Thursdays & Fridays" },
  { name: "Wesham",                url: "https://www.danceschoolkirkham.co.uk/",      day: "Thursdays & Fridays" },
] as const

export const WHY_US = [
  {
    heading: "Established 1946",
    body: "Nearly 80 years of dance education across Lancashire — a genuine institution with a proud legacy.",
  },
  {
    heading: "100% BTDA Pass Rate",
    body: "Every student who enters examinations with the British Theatre Dance Association achieves their grade.",
  },
  {
    heading: "Third-Generation School",
    body: "From Margaret Sandham to Heather Fitchett to Martine Proll and Miss Melissa — excellence runs in the family.",
  },
  {
    heading: "DBS-Checked Staff",
    body: "All teachers and parent helpers are DBS checked regularly. Safeguarding is at the heart of everything we do.",
  },
  {
    heading: "Free Parking",
    body: "Free parking is available at every one of our nine studios across Lancashire.",
  },
  {
    heading: "BTDA & RAD Registered",
    body: "Fully registered with the British Theatre Dance Association and Royal Academy of Dance. Vocational and GCSE-equivalent qualifications offered.",
  },
] as const

export const FACULTY = [
  { name: "Martine Proll",    role: "Principal" },
  { name: "Natalie Strong",   role: "Teacher" },
  { name: "Katy Foy",         role: "Teacher" },
  { name: "Melissa Howard",   role: "Teacher" },
  { name: "Lara Malaney",     role: "Teacher" },
  { name: "Emma Hunt",        role: "Teacher" },
  { name: "Tia Carrie Algar", role: "Teacher" },
  { name: "Sarah Gaul",       role: "Teacher" },
  { name: "Katie McDougall",  role: "Teacher" },
  { name: "Niamh Tierney",    role: "Teacher" },
  { name: "Caitlin Tierney",  role: "Teacher" },
  { name: "Hannah Whalley",   role: "Teacher" },
  { name: "Amelia Seddon",    role: "Teacher" },
] as const

export const GUEST_TEACHERS = [
  "Steve Chesters",
  "Carrie Ellis",
  "Prabhavathy Appaji",
] as const

export const RECEPTION_STAFF = [
  "Mrs L Malaney",
  "Mrs Bamber",
  "Mrs Walker",
] as const

export const TIMETABLE_PDFS = [
  {
    label: "Show Timetable — from Saturday 31st January 2026",
    url: "https://www.fitchettproll.co.uk/wp-content/uploads/2026/01/Show-Timetable-from-31st-January-2026.pdf",
  },
  {
    label: "Weekday Timetable — Spring 2026 (Mon–Thu)",
    url: "https://www.fitchettproll.co.uk/wp-content/uploads/2026/01/Week-Day-Spring-2026.pdf",
  },
  {
    label: "Saturday Timetable — Autumn Term 2025",
    url: "https://www.fitchettproll.co.uk/wp-content/uploads/2025/07/SATURDAY-Timetable-Autumn-Term-2025-UPDATED-.pdf",
  },
] as const

export const FEES_PDFS = [
  {
    label: "Class Fees — September 2024",
    url: "https://www.fitchettproll.co.uk/wp-content/uploads/2024/09/Class-Fees-September-2024-2.pdf",
  },
] as const

export const UNIFORM_PDFS = [
  {
    label: "Uniform Price List — September 2024",
    url: "https://www.fitchettproll.co.uk/wp-content/uploads/2024/09/Fitchett-Proll-Uniform-28th-September-2024.pdf",
  },
] as const
