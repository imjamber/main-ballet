"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  onDark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start"

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="text-champagne tracking-[0.28em] uppercase text-xs font-sans font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl font-normal leading-tight ${
          onDark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-base leading-relaxed max-w-xl ${
            onDark ? "text-cream/60" : "text-stone"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="w-10 h-px bg-rose mt-1" />
    </motion.div>
  )
}
