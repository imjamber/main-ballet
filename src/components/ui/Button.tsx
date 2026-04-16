"use client"

import { motion } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-xs",
    lg: "px-12 py-4 text-sm",
  }

  const variants = {
    primary:
      "bg-rose text-cream hover:bg-rose-light disabled:opacity-50",
    outline:
      "border border-ink text-ink hover:bg-ink hover:text-cream disabled:opacity-50",
    ghost:
      "text-rose hover:text-rose-light underline-offset-4 hover:underline disabled:opacity-50",
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )
}
