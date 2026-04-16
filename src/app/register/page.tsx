import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import RegistrationForm from "@/components/register/RegistrationForm"

export const metadata: Metadata = {
  title: "Register | Fitchett Proll Dance",
  description: "Enrol your child or yourself in classes at Sandham Fitchett Performing Arts.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-cream">

      {/* Banner */}
      <div className="bg-ink pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading
            eyebrow="Enrol Today"
            title="Register for Classes"
            subtitle="Complete the form below and we'll confirm your place within 2 working days."
            align="left"
            onDark
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-0 py-24">
        <RegistrationForm />
      </div>
    </div>
  )
}
