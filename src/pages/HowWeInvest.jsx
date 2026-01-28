import React, { useState } from "react"
import SectionHeading from "../components/SectionHeading.jsx"
import MotionIn from "../components/MotionIn.jsx"
import { invest } from "../data/content.js"
import Button from "../components/Button.jsx"

export default function HowWeInvest() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Business model"
            title="How We Invest"
            description={invest.overview}
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {invest.approaches.map((a, idx) => (
              <Button
                key={a.title}
                variant={idx === active ? "primary" : "secondary"}
                className={idx === active ? "bg-brand-navy text-white" : ""}
                onClick={() => setActive(idx)}
                type="button"
              >
                {a.title}
              </Button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
            <MotionIn className="lg:col-span-7">
              <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                <div className="eyebrow">Approach</div>
                <h3 className="text-xl font-semibold mt-2 text-base-text">
                  {invest.approaches[active].title}
                </h3>
                <div className="mt-3 divider-gold" />
                <p className="p mt-5">{invest.approaches[active].body}</p>
              </div>
            </MotionIn>

            <MotionIn className="lg:col-span-5" delay={0.06}>
              <div className="rounded-xl2 border border-base-border bg-base-soft p-7">
                <div className="text-sm font-semibold text-base-text">Overview</div>
                <p className="p mt-3">{invest.overview}</p>

                <div className="mt-6 h-px bg-base-border" />

                <div className="mt-6">
                  <div className="text-sm font-semibold text-base-text">All approaches</div>
                  <ul className="mt-3 space-y-2 text-sm text-base-muted">
                    {invest.approaches.map((a) => (
                      <li key={a.title} className="flex gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-gold" />
                        <span>{a.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionIn>
          </div>
        </div>
      </section>
    </div>
  )
}
