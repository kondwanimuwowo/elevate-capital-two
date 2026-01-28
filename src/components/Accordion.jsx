import React, { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-base-border rounded-xl2 border border-base-border bg-white overflow-hidden shadow-soft">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex
        const contentId = `${baseId}-content-${idx}`
        const buttonId = `${baseId}-button-${idx}`

        return (
          <div key={item.title}>
            <button
              id={buttonId}
              className="focus-ring w-full px-5 py-4 flex items-center justify-between text-left"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              type="button"
            >
              <span className="font-semibold text-base-text">{item.title}</span>
              <ChevronDown
                className={[
                  "h-4 w-4 text-base-muted transition-transform",
                  isOpen ? "rotate-180" : "rotate-0"
                ].join(" ")}
              />
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={[
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <p className="p">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
