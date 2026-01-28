import React from "react"

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center"

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}

      <div className={isCenter ? "mx-auto" : ""}>
        <h2 className="h2 mt-2">{title}</h2>
        <div className={isCenter ? "mx-auto mt-3 divider-gold" : "mt-3 divider-gold"} />
      </div>

      {description ? (
        <p className={isCenter ? "p mt-5 mx-auto max-w-[72ch]" : "p mt-5 max-w-[72ch]"}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
