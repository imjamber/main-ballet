import Link from "next/link"
import { SCHOOL_EMAIL, SCHOOL_PHONE } from "@/lib/constants"

export default function ContactSection() {
  return (
    <section className="bg-blush py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

        <span className="font-sans text-champagne tracking-[0.3em] uppercase text-xs">
          Ready to Begin?
        </span>

        <h2 className="font-serif text-5xl md:text-6xl text-ink font-normal leading-tight">
          Your first class starts with a single step.
        </h2>

        <div className="w-10 h-px bg-rose" />

        <p className="font-sans text-stone text-base leading-relaxed max-w-md">
          Register online or get in touch — we&apos;ll help you find the right class for your child
          or for yourself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="inline-flex items-center justify-center bg-rose text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-rose-light transition-colors duration-300"
          >
            Register Now
          </Link>
          <a
            href={`mailto:${SCHOOL_EMAIL}`}
            className="inline-flex items-center justify-center border border-ink text-ink font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Email Us
          </a>
        </div>

        <p className="font-sans text-stone/60 text-sm">
          Or call us on{" "}
          <a
            href={`tel:${SCHOOL_PHONE.replace(/\s/g, "")}`}
            className="text-rose hover:text-rose-light transition-colors"
          >
            {SCHOOL_PHONE}
          </a>
        </p>
      </div>
    </section>
  )
}
