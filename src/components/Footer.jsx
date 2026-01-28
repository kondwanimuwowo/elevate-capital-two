import React from "react"
import { Mail, MapPin, Phone, Globe } from "lucide-react"
import { contact, brand } from "../data/content.js"

export default function Footer() {
  return (
    <footer className="border-t border-base-border bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-base-text">{brand.name}</div>
            <p className="p mt-3 max-w-[44ch]">
              Structured capital and business solutions focused on sustainable enterprise growth in emerging markets.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-base-text">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-base-muted">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-brand-navy mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 text-brand-navy mt-0.5" />
                <a className="focus-ring rounded" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-4 w-4 text-brand-navy mt-0.5" />
                <a className="focus-ring rounded" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
              <div className="flex gap-3">
                <Globe className="h-4 w-4 text-brand-navy mt-0.5" />
                <span>{contact.website}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-base-text">Notes</div>
            <p className="p mt-4">
              This website is a public overview. Compliance documents and supporting materials are available on request.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-base-border pt-6">
          <div className="text-xs text-base-muted">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="text-xs text-base-muted">
            Built with a minimal brand system: navy, gold, and whitespace.
          </div>
        </div>
      </div>
    </footer>
  )
}
