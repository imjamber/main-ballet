import { NextRequest, NextResponse } from "next/server"

async function expectedToken() {
  const pw  = process.env.ADMIN_PASSWORD ?? "changeme"
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("")
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isDashboard = pathname.startsWith("/admin/dashboard")
  const isAdminApi  = pathname.startsWith("/api/admin") && !pathname.startsWith("/api/admin/login")

  if (isDashboard || isAdminApi) {
    const token = request.cookies.get("admin-token")?.value
    if (token !== await expectedToken()) {
      if (isDashboard) return NextResponse.redirect(new URL("/admin", request.url))
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/dashboard/:path*", "/api/admin/:path*"],
}
