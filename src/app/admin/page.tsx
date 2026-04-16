"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError]       = useState("")
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    setLoading(false)
    if (res.ok) {
      router.push("/admin/dashboard")
    } else {
      setError("Incorrect password")
    }
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-sans text-champagne text-xs tracking-[0.3em] uppercase">Admin</span>
          <h1 className="font-serif text-3xl text-cream">Fitchett Proll Dance</h1>
          <div className="w-8 h-px bg-rose mt-1" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-sans text-xs tracking-wider uppercase text-cream/50">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
              className="bg-transparent border border-cream/20 text-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-rose transition-colors"
            />
          </label>

          {error && <p className="font-sans text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="font-sans text-xs tracking-widest uppercase bg-rose text-cream px-8 py-3.5 hover:bg-rose-light transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
