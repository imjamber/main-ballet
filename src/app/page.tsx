import Hero from "@/components/home/Hero"
import ClassesSection from "@/components/home/ClassesSection"
import WhyUs from "@/components/home/WhyUs"
import StudiosSection from "@/components/home/StudiosSection"
import ContactSection from "@/components/home/ContactSection"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClassesSection />
      <WhyUs />
      <StudiosSection />
      <ContactSection />
    </main>
  )
}
