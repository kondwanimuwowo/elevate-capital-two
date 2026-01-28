import React from "react"
import SectionHeading from "../components/SectionHeading.jsx"
import MotionIn from "../components/MotionIn.jsx"
import Accordion from "../components/Accordion.jsx"
import { risk } from "../data/content.js"
import Button from "../components/Button.jsx"

export default function RiskCompliance() {
  return (
    <div>
      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Risk & compliance"
            title="Risk Management Framework"
            description={risk.intro}
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <MotionIn className="lg:col-span-7">
              <div className="hidden lg:grid gap-6">
                {risk.pillars.map((p) => (
                  <div key={p.title} className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                    <div className="text-sm font-semibold text-base-text">{p.title}</div>
                    <p className="p mt-3">{p.body}</p>
                  </div>
                ))}
              </div>

              <div className="lg:hidden">
                <Accordion items={risk.pillars} />
              </div>
            </MotionIn>

            <MotionIn className="lg:col-span-5" delay={0.06}>
              <div className="rounded-xl2 border border-base-border bg-base-soft p-7">
                <div className="text-sm font-semibold text-base-text">Compliance Documents</div>
                <p className="p mt-3">{risk.complianceNote}</p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-xl border border-base-border bg-white p-4">
                    <div className="text-sm font-semibold text-base-text">Tax Clearance Certificate</div>
                    <div className="mt-1 text-sm text-base-muted">Download placeholder · Available on request</div>
                    <div className="mt-3">
                      <Button variant="secondary" disabled className="opacity-60 cursor-not-allowed">
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-base-border bg-white p-4">
                    <div className="text-sm font-semibold text-base-text">Other Compliance Materials</div>
                    <div className="mt-1 text-sm text-base-muted">Download placeholder · Available on request</div>
                    <div className="mt-3">
                      <Button variant="secondary" disabled className="opacity-60 cursor-not-allowed">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-px bg-base-border" />

                <div className="mt-6">
                  <div className="text-sm font-semibold text-base-text">Principle</div>
                  <p className="p mt-2">
                    Risk discipline is embedded across identification, mitigation, monitoring, and contingency planning to protect investor value.
                  </p>
                </div>
              </div>
            </MotionIn>
          </div>
        </div>
      </section>
    </div>
  )
}
