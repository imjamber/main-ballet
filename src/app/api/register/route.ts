import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const required = ["studentFirstName", "studentLastName", "classType", "parentFirstName", "email", "phone"]
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // TODO: wire up email delivery or CRM integration
    console.log("Registration submission:", {
      student: `${data.studentFirstName} ${data.studentLastName}`,
      age: data.studentAge,
      class: data.classType,
      studio: data.studio,
      parent: `${data.parentFirstName} ${data.parentLastName}`,
      email: data.email,
      phone: data.phone,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}
