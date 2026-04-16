"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const disciplines = [
  "Classical Ballet",
  "Pointes",
  "Tap",
  "Modern Jazz",
  "Street Dance",
  "Contemporary",
  "Acrobatic Dance",
  "Adult Ballet",
  "Silver Swans®",
  "Disco",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex flex-col overflow-hidden">

      {/* Rose left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-rose hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        style={{ transformOrigin: "top" }}
      />

      {/* Blush ambient glow — right */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blush/70 to-transparent pointer-events-none" />

      {/* Decorative large number — background */}
      <div className="absolute right-8 bottom-24 font-serif text-[20rem] leading-none text-ink/[0.025] select-none pointer-events-none hidden xl:block">
        1946
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-8 md:px-16 flex flex-col justify-center pt-32 pb-16">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            className="font-sans text-rose tracking-[0.35em] uppercase text-xs font-medium mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Established 1946 · Preston &amp; Lancashire
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-serif leading-[0.88] tracking-tight mb-8"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <span className="block text-7xl md:text-8xl lg:text-[6.5rem] italic text-rose font-normal">
              Fitchett
            </span>
            <span className="block text-7xl md:text-8xl lg:text-[6.5rem] not-italic text-ink font-light">
              Proll Dance
            </span>
          </motion.h1>

          {/* Rule */}
          <motion.div
            className="h-px bg-rose mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          />

          {/* Tagline */}
          <motion.p
            className="font-sans text-stone text-lg md:text-xl leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Preston&apos;s premier dance school. Classes for every age and ability — from baby ballet to Silver Swans.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              href="/classes"
              className="inline-flex items-center justify-center bg-rose text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-rose-light transition-colors duration-300"
            >
              View Classes
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center border border-ink text-ink font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Disciplines marquee */}
      <motion.div
        className="relative z-10 border-t border-ink/10 bg-cream/80 py-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span
              key={i}
              className="font-serif italic text-stone/50 text-sm shrink-0 select-none"
            >
              {d}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
