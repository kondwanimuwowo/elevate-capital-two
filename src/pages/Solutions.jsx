import React from "react"
import SectionHeading from "../components/SectionHeading.jsx"
import MotionIn from "../components/MotionIn.jsx"
import { solutions } from "../data/content.js"

export default function Solutions() {
  return (
    <div>
      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Solutions"
            title="Service Catalogue"
            description={solutions.intro}
          />

          <div className="mt-12 grid gap-6">
            {solutions.items.map((item, idx) => (
              <MotionIn key={item.title} delay={idx * 0.05}>
                <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                  <div className="eyebrow">Service</div>
                  <h3 className="text-xl font-semibold mt-2 text-base-text">{item.title}</h3>
                  <div className="mt-3 divider-gold" />
                  <p className="p mt-5">{item.body}</p>
                </div>
              </MotionIn>
            ))}
          </div>

          <MotionIn delay={0.08}>
            <div className="mt-10 rounded-xl2 border border-base-border bg-base-soft p-7">
              <div className="text-sm font-semibold text-base-text">Positioning</div>
              <p className="p mt-3">{solutions.closing}</p>
            </div>
          </MotionIn>
        </div>
      </section>
    </div>
  )
}
