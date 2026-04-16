"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { ContactFormData } from "@/lib/types"

const EMPTY: ContactFormData = { name: "", email: "", phone: "", message: "" }
type State = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(EMPTY)
  const [state, setState] = useState<State>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? "Something went wrong")
      }
      setState("success")
      setForm(EMPTY)
    } catch (err) {
      setState("error")
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error")
    }
  }

  if (state === "success") {
    return (
      <motion.div
        className="flex flex-col items-center text-center gap-5 py-16"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-14 h-14 rounded-full border border-rose flex items-center justify-center">
          <svg className="w-6 h-6 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-ink">Message Sent</h3>
        <p className="font-sans text-stone text-sm leading-relaxed max-w-sm">
          Thank you for getting in touch. We&apos;ll get back to you as soon as possible during our opening hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-sans text-xs tracking-widest uppercase text-rose border border-rose px-6 py-2.5 hover:bg-rose hover:text-cream transition-colors mt-2"
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Your Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <Field label="Telephone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
      <TextareaField label="Message" name="message" value={form.message} onChange={handleChange} required />

      {state === "error" && (
        <p className="font-sans text-red-500 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="self-start font-sans text-xs tracking-widest uppercase bg-rose text-cream px-10 py-4 hover:bg-rose-light transition-colors disabled:opacity-50"
      >
        {state === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
function Field({ label, ...props }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs tracking-wide text-stone uppercase">{label}</span>
      <input
        {...props}
        className="bg-transparent border border-ink/20 text-ink px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors placeholder:text-ink/20"
      />
    </label>
  )
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}
function TextareaField({ label, ...props }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs tracking-wide text-stone uppercase">{label}</span>
      <textarea
        {...props}
        rows={5}
        className="bg-transparent border border-ink/20 text-ink px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors placeholder:text-ink/20 resize-none"
      />
    </label>
  )
}
