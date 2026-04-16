"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_LINKS, SCHOOL_NAME } from "@/lib/constants"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b border-ink/8 shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-18">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg text-ink hover:text-rose transition-colors duration-200 tracking-wide"
          >
            {SCHOOL_NAME}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-wider uppercase text-stone hover:text-rose transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="font-sans text-xs tracking-wider uppercase bg-rose text-cream px-5 py-2.5 hover:bg-rose-light transition-colors duration-200 ml-2"
            >
              Register
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-px bg-ink"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-ink"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-ink"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-7"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-ink hover:text-rose transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
            >
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-xs tracking-wider uppercase bg-rose text-cream px-8 py-3 mt-2 inline-block hover:bg-rose-light transition-colors"
              >
                Register
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
