import { NextRequest, NextResponse } from "next/server"

const REPO  = process.env.GITHUB_REPO  ?? "imjamber/main-ballet"
const TOKEN = process.env.GITHUB_TOKEN ?? ""
const FILE  = "src/data/content.json"
const API   = `https://api.github.com/repos/${REPO}/contents/${FILE}`

export async function POST(req: NextRequest) {
  if (!TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not configured" }, { status: 500 })
  }

  const newContent = await req.json()

  // 1. Get current file SHA (required by GitHub API to update)
  const current = await fetch(API, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github+json" },
  })

  if (!current.ok) {
    return NextResponse.json({ error: "Could not fetch file from GitHub" }, { status: 500 })
  }

  const { sha } = await current.json()

  // 2. Commit updated content
  const body = JSON.stringify({
    message: "Update site content via admin panel",
    content: Buffer.from(JSON.stringify(newContent, null, 2)).toString("base64"),
    sha,
  })

  const update = await fetch(API, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body,
  })

  if (!update.ok) {
    const err = await update.json()
    return NextResponse.json({ error: err.message ?? "GitHub update failed" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
