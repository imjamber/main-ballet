"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DISCIPLINES, ADULT_DISCIPLINES, STUDIOS } from "@/lib/constants"
import type { RegistrationFormData } from "@/lib/types"

const EMPTY: RegistrationFormData = {
  studentFirstName: "",
  studentLastName: "",
  studentAge: "",
  classType: "",
  parentFirstName: "",
  parentLastName: "",
  email: "",
  phone: "",
  studio: "",
  medicalNotes: "",
  hearAboutUs: "",
}

type State = "idle" | "loading" | "success" | "error"

export default function RegistrationForm() {
  const [form, setForm] = useState<RegistrationFormData>(EMPTY)
  const [state, setState] = useState<State>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/register", {
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

  const allClasses = [
    ...DISCIPLINES.map((d) => d.name),
    ...ADULT_DISCIPLINES.map((d) => d.name),
  ]

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
        <h3 className="font-serif text-3xl text-ink">Registration Received</h3>
        <p className="font-sans text-stone text-sm leading-relaxed max-w-sm">
          Thank you for registering. We&apos;ll be in touch within 2 working days to confirm your place.
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-sans text-xs tracking-widest uppercase text-rose border border-rose px-6 py-2.5 hover:bg-rose hover:text-cream transition-colors mt-2"
        >
          Register Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">

      {/* Student */}
      <fieldset className="flex flex-col gap-6">
        <legend className="font-sans text-champagne text-xs tracking-[0.28em] uppercase mb-2">Student Details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="First Name" name="studentFirstName" value={form.studentFirstName} onChange={handleChange} required />
          <Field label="Last Name" name="studentLastName" value={form.studentLastName} onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Age" name="studentAge" type="number" min="1" max="99" value={form.studentAge} onChange={handleChange} required />
          <SelectField label="Preferred Class" name="classType" value={form.classType} onChange={handleChange} required>
            <option value="">Select a class</option>
            {allClasses.map((c) => <option key={c} value={c}>{c}</option>)}
          </SelectField>
        </div>
        <SelectField label="Preferred Studio" name="studio" value={form.studio} onChange={handleChange} required>
          <option value="">Select a studio</option>
          {STUDIOS.map((s) => (
            <option key={s.name} value={s.name}>{s.name} ({s.day})</option>
          ))}
        </SelectField>
      </fieldset>

      {/* Parent */}
      <fieldset className="flex flex-col gap-6">
        <legend className="font-sans text-champagne text-xs tracking-[0.28em] uppercase mb-2">Parent / Guardian Details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="First Name" name="parentFirstName" value={form.parentFirstName} onChange={handleChange} required />
          <Field label="Last Name" name="parentLastName" value={form.parentLastName} onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        </div>
      </fieldset>

      {/* Optional */}
      <fieldset className="flex flex-col gap-6">
        <legend className="font-sans text-champagne text-xs tracking-[0.28em] uppercase mb-2">Additional Information</legend>
        <TextareaField
          label="Medical Notes / Additional Needs (optional)"
          name="medicalNotes"
          value={form.medicalNotes}
          onChange={handleChange}
        />
        <SelectField label="How did you hear about us? (optional)" name="hearAboutUs" value={form.hearAboutUs} onChange={handleChange}>
          <option value="">Please select</option>
          <option value="word-of-mouth">Word of mouth</option>
          <option value="google">Google search</option>
          <option value="social-media">Social media</option>
          <option value="existing-student">Existing student / family</option>
          <option value="other">Other</option>
        </SelectField>
      </fieldset>

      {state === "error" && (
        <p className="font-sans text-red-500 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="self-start font-sans text-xs tracking-widest uppercase bg-rose text-cream px-12 py-4 hover:bg-rose-light transition-colors disabled:opacity-50"
      >
        {state === "loading" ? "Submitting…" : "Submit Registration"}
      </button>
    </form>
  )
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string }
function Field({ label, ...props }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs tracking-wide text-stone uppercase">{label}</span>
      <input {...props} className="bg-transparent border border-ink/20 text-ink px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors" />
    </label>
  )
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label: string; children: React.ReactNode }
function SelectField({ label, children, ...props }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs tracking-wide text-stone uppercase">{label}</span>
      <select {...props} className="bg-cream border border-ink/20 text-ink px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors">
        {children}
      </select>
    </label>
  )
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label: string }
function TextareaField({ label, ...props }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs tracking-wide text-stone uppercase">{label}</span>
      <textarea {...props} rows={4} className="bg-transparent border border-ink/20 text-ink px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors resize-none" />
    </label>
  )
}
