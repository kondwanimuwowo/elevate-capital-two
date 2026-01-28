import React, { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Button from "./Button.jsx"
import { brand } from "../data/content.js"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/solutions", label: "Solutions" },
      { to: "/how-we-invest", label: "How We Invest" },
      { to: "/risk-compliance", label: "Risk & Compliance" },
      { to: "/contact", label: "Contact" }
    ],
    []
  )

  const linkClass = ({ isActive }) =>
    [
      "focus-ring rounded-lg px-3 py-2 text-sm transition-colors",
      isActive ? "text-brand-navy bg-base-soft" : "text-base-muted hover:text-brand-navy hover:bg-base-soft"
    ].join(" ")

  return (
    <header className="sticky top-0 z-40 border-b border-base-border bg-white/90 backdrop-blur">
      <div className="container-shell h-16 flex items-center justify-between">
        <NavLink to="/" className="focus-ring rounded-lg px-2 py-1">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand-navy text-white grid place-items-center text-sm font-semibold">
              EC
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-base-text">{brand.name}</div>
              <div className="text-xs text-base-muted">Structured Capital</div>
            </div>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button as={NavLink} to="/contact" variant="secondary">
            Talk to Us
          </Button>
          <Button as={NavLink} to="/solutions" variant="primary">
            Explore Solutions
          </Button>
        </div>

        <button
          className="lg:hidden focus-ring rounded-lg p-2 text-base-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-base-border bg-white">
          <div className="container-shell py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={linkClass}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}

            <div className="pt-3 flex gap-2">
              <Button as={NavLink} to="/contact" variant="secondary" className="w-full" onClick={() => setOpen(false)}>
                Talk to Us
              </Button>
              <Button as={NavLink} to="/solutions" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Solutions
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
