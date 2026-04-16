import Link from "next/link"
import { NAV_LINKS, SCHOOL_NAME, SCHOOL_FULL_NAME, SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_HOURS_WEEKDAY, SCHOOL_HOURS_SAT } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 font-sans">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-cream text-xl tracking-wide">{SCHOOL_NAME}</span>
          <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
            {SCHOOL_FULL_NAME}. Dance education across Lancashire since 1946.
          </p>
          <p className="text-xs text-cream/30 leading-relaxed">
            Registered with the British Theatre Dance Association (BTDA)
            and Royal Academy of Dance (RAD).
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-champagne mb-1">Navigation</span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-champagne mb-1">Contact</span>
          <a
            href={`tel:${SCHOOL_PHONE.replace(/\s/g, "")}`}
            className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
          >
            {SCHOOL_PHONE}
          </a>
          <a
            href={`mailto:${SCHOOL_EMAIL}`}
            className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
          >
            {SCHOOL_EMAIL}
          </a>
          <div className="mt-2 flex flex-col gap-1">
            <p className="text-xs text-cream/40">{SCHOOL_HOURS_WEEKDAY}</p>
            <p className="text-xs text-cream/40">{SCHOOL_HOURS_SAT}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8 py-6">
        <p className="text-center text-xs text-cream/25">
          © {new Date().getFullYear()} {SCHOOL_FULL_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
