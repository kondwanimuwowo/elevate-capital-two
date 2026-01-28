import React, { useMemo, useState } from "react"
import SectionHeading from "../components/SectionHeading.jsx"
import MotionIn from "../components/MotionIn.jsx"
import Button from "../components/Button.jsx"
import { contact } from "../data/content.js"

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Full name is required."
  if (!values.email.trim()) errors.email = "Email is required."
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email."
  if (!values.message.trim()) errors.message = "Message is required."
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => validate(values), [values])
  const hasErrors = Object.keys(errors).length > 0

  function onChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function onBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
  }

  function onSubmit(e) {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })

    if (Object.keys(validate(values)).length > 0) return

    setSubmitted(true)
    setValues({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div>
      <section className="section">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Elevate Capital"
            description="Share a short note and we’ll follow up using the contact details provided."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <MotionIn className="lg:col-span-5">
              <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                <div className="text-sm font-semibold text-base-text">Contact details</div>

                <div className="mt-4 space-y-3 text-sm text-base-muted">
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase">Address</div>
                    <div className="mt-1 text-base-text">{contact.address}</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase">Phone</div>
                    <a
                      className="mt-1 inline-block text-base-text focus-ring rounded"
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase">Email</div>
                    <a
                      className="mt-1 inline-block text-base-text focus-ring rounded"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.22em] uppercase">Website</div>
                    <div className="mt-1 text-base-text">{contact.website}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-base-border bg-base-soft p-4">
                  <div className="text-sm font-semibold text-base-text">Note</div>
                  <div className="mt-2 text-sm text-base-muted">
                    This form is front-end only (no backend). Use it to collect messages and connect it later to email
                    or a CRM.
                  </div>
                </div>
              </div>
            </MotionIn>

            <MotionIn className="lg:col-span-7" delay={0.06}>
              <div className="rounded-xl2 border border-base-border bg-white p-7 shadow-soft">
                <div className="text-sm font-semibold text-base-text">Send a message</div>

                {submitted ? (
                  <div className="mt-4 rounded-xl border border-base-border bg-base-soft p-4">
                    <div className="text-sm font-semibold text-base-text">Message received</div>
                    <div className="mt-2 text-sm text-base-muted">
                      Success state only. Wire this to your backend when ready.
                    </div>
                    <div className="mt-4">
                      <Button type="button" variant="secondary" onClick={() => setSubmitted(false)}>
                        Send another message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium text-base-text" htmlFor="name">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Your full name"
                        className={[
                          "focus-ring w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm",
                          touched.name && errors.name ? "border-red-300" : "border-base-border"
                        ].join(" ")}
                      />
                      {touched.name && errors.name ? (
                        <div className="text-xs text-red-600">{errors.name}</div>
                      ) : null}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label className="text-sm font-medium text-base-text" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          onBlur={onBlur}
                          placeholder="you@example.com"
                          className={[
                            "focus-ring w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm",
                            touched.email && errors.email ? "border-red-300" : "border-base-border"
                          ].join(" ")}
                        />
                        {touched.email && errors.email ? (
                          <div className="text-xs text-red-600">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="grid gap-2">
                        <label className="text-sm font-medium text-base-text" htmlFor="phone">
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          onBlur={onBlur}
                          placeholder="+260 ..."
                          className="focus-ring w-full rounded-xl border border-base-border bg-white px-3.5 py-2.5 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label className="text-sm font-medium text-base-text" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={onChange}
                        onBlur={onBlur}
                        rows={5}
                        placeholder="Tell us a bit about your needs..."
                        className={[
                          "focus-ring w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm resize-y",
                          touched.message && errors.message ? "border-red-300" : "border-base-border"
                        ].join(" ")}
                      />
                      {touched.message && errors.message ? (
                        <div className="text-xs text-red-600">{errors.message}</div>
                      ) : null}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="text-xs text-base-muted">
                        By submitting, you agree to be contacted using the details you provide.
                      </div>
                      <Button type="submit" disabled={hasErrors}>
                        Send message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </MotionIn>
          </div>
        </div>
      </section>
    </div>
  )
}
