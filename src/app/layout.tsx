import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fitchett Proll Dance | Sandham Fitchett Performing Arts",
  description:
    "Professional dance tuition for all ages across Lancashire since 1946. Ballet, Tap, Contemporary, Jazz, Street Dance and more — from baby ballet to Silver Swans.",
  keywords: [
    "dance school Lancashire",
    "ballet classes Preston",
    "tap dancing Lancashire",
    "children dance classes Preston",
    "Silver Swans ballet",
    "adult ballet Preston",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
