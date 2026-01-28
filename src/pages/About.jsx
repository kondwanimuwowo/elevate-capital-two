import React from "react"
import SectionHeading from "../components/SectionHeading.jsx"
import MotionIn from "../components/MotionIn.jsx"
import Card from "../components/Card.jsx"
import { about } from "../data/content.js"
import { Handshake, Target, Compass, BadgeCheck } from "lucide-react"

export default function About() {
  const icons = [Handshake, Target, BadgeCheck, Compass]

  return (
    <div>
      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="About"
            title="Who We Are"
            description={about.whoWeAre}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <MotionIn>
              <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                <div className="eyebrow">Vision</div>
                <h3 className="text-xl font-semibold mt-2 text-base-text">Our Vision</h3>
                <div className="mt-3 divider-gold" />
                <p className="p mt-5">{about.vision}</p>
              </div>
            </MotionIn>

            <MotionIn delay={0.06}>
              <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                <div className="eyebrow">Mission</div>
                <h3 className="text-xl font-semibold mt-2 text-base-text">Our Mission</h3>
                <div className="mt-3 divider-gold" />
                <p className="p mt-5">{about.mission}</p>
              </div>
            </MotionIn>
          </div>
        </div>
      </section>

      <section className="section bg-base-soft">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Values"
            title="Core Values"
            description="These values guide how we partner, structure capital, and support enterprise growth."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {about.values.map((v, idx) => (
              <MotionIn key={v.title} delay={idx * 0.05}>
                <Card title={v.title} body={v.body} icon={icons[idx] || BadgeCheck} />
              </MotionIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
