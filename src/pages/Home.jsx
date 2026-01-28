import React from "react"
import { ArrowRight, Shield, TrendingUp, Briefcase } from "lucide-react"
import { brand, about, solutions, whyChoose, risk, contact } from "../data/content.js"
import SectionHeading from "../components/SectionHeading.jsx"
import Button from "../components/Button.jsx"
import Card from "../components/Card.jsx"
import MotionIn from "../components/MotionIn.jsx"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
      <section className="bg-brand-navy text-white">
        <div className="container-shell section">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <MotionIn className="lg:col-span-7">
              <div className="eyebrow text-white/70">Elevate Capital</div>
              <h1 className="h1 mt-3">
                {brand.tagline}
              </h1>
              <p className="mt-5 text-white/75 text-base sm:text-[1.05rem] leading-relaxed max-w-[70ch]">
                {about.whoWeAre}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as={NavLink} to="/solutions" variant="primary" className="bg-brand-gold text-brand-navy hover:bg-[#d3b15c]">
                  Explore Solutions <ArrowRight className="h-4 w-4" />
                </Button>
                <Button as={NavLink} to="/contact" variant="secondary" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/30">
                  Talk to Us
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Structured Capital</div>
                  <div className="mt-1 text-sm text-white/70">Tailored to fit risk and growth needs</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Strategic Advisory</div>
                  <div className="mt-1 text-sm text-white/70">Operational readiness for scaling</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Risk Discipline</div>
                  <div className="mt-1 text-sm text-white/70">Embedded monitoring and controls</div>
                </div>
              </div>
            </MotionIn>

            <MotionIn className="lg:col-span-5" delay={0.08}>
              <div className="rounded-xl2 border border-white/10 bg-white/5 p-7">
                <div className="text-sm text-white/70">Contact</div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="text-white/90">{contact.address}</div>
                  <div className="text-white/90">{contact.phone}</div>
                  <div className="text-white/90">{contact.email}</div>
                  <div className="text-white/70">{contact.website}</div>
                </div>
                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-6">
                  <div className="text-sm font-semibold">Focus</div>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    Empowering emerging market businesses with financing and business solutions designed for sustainable growth.
                  </p>
                </div>
              </div>
            </MotionIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Solutions"
            title="Service Catalogue"
            description={solutions.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <MotionIn>
              <Card title={solutions.items[0].title} body={solutions.items[0].body} icon={Briefcase} />
            </MotionIn>
            <MotionIn delay={0.05}>
              <Card title={solutions.items[1].title} body={solutions.items[1].body} icon={TrendingUp} />
            </MotionIn>
            <MotionIn delay={0.1}>
              <Card title={solutions.items[2].title} body={solutions.items[2].body} icon={Shield} />
            </MotionIn>
          </div>

          <div className="mt-10 flex">
            <Button as={NavLink} to="/solutions" variant="secondary">
              View full solutions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-base-soft">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why us"
            title={whyChoose.title}
            description="A focused approach that combines capital structuring, advisory support, and disciplined risk management."
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } }
            }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {whyChoose.points.map((p) => (
              <motion.li
                key={p}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
                }}
                className="rounded-xl2 border border-base-border bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                  <div className="text-sm text-base-text leading-relaxed">{p}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Risk"
            title="Risk Management Framework"
            description={risk.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {risk.pillars.map((pillar, idx) => (
              <MotionIn key={pillar.title} delay={idx * 0.04}>
                <div className="rounded-xl2 border border-base-border bg-white p-6 shadow-soft h-full">
                  <div className="text-sm font-semibold text-base-text">{pillar.title}</div>
                  <p className="p mt-3">{pillar.body}</p>
                </div>
              </MotionIn>
            ))}
          </div>

          <div className="mt-10 flex">
            <Button as={NavLink} to="/risk-compliance" variant="secondary">
              View risk & compliance <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="container-shell py-12 sm:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-sm text-white/70">Get in touch</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.01em]">
                Discuss your funding and growth needs.
              </div>
              <div className="mt-2 text-sm text-white/70">
                {contact.email} · {contact.phone}
              </div>
            </div>
            <div className="flex gap-3">
              <Button as={NavLink} to="/contact" variant="primary" className="bg-brand-gold text-brand-navy hover:bg-[#d3b15c]">
                Contact <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as={NavLink} to="/about" variant="secondary" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/30">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
