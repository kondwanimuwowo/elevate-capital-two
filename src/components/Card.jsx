import React from "react"
import { motion } from "framer-motion"

export default function Card({ title, body, icon: Icon, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={[
        "rounded-xl2 border border-base-border bg-white p-6 shadow-soft",
        className
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        {Icon ? (
          <div className="shrink-0 rounded-xl bg-base-soft p-2.5 border border-base-border">
            <Icon className="h-5 w-5 text-brand-navy" />
          </div>
        ) : null}

        <div>
          <h3 className="text-lg font-semibold text-base-text">{title}</h3>
          <p className="p mt-2">{body}</p>
        </div>
      </div>
    </motion.div>
  )
}
