import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      )
    }

    // TODO: wire up email delivery (e.g. Resend, SendGrid)
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}
