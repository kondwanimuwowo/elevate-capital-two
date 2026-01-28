import React from "react"

const styles = {
  primary:
    "bg-brand-navy text-white hover:bg-brand-navy2 border border-transparent",
  secondary:
    "bg-white text-brand-navy border border-base-border hover:border-brand-gold hover:text-brand-navy",
  ghost:
    "bg-transparent text-brand-navy border border-transparent hover:bg-base-soft"
}

export default function Button({
  as: Comp = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <Comp
      className={[
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
        styles[variant] || styles.primary,
        className
      ].join(" ")}
      {...props}
    />
  )
}
