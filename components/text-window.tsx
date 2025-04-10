import type { ReactNode } from "react"

interface TextWindowProps {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
  className?: string
  variant?: "heading" | "subheading" | "normal"
  centered?: boolean
}

export function TextWindow({
  children,
  as = "div",
  className = "",
  variant = "normal",
  centered = false,
}: TextWindowProps) {
  const Component = as

  const variantClasses = {
    heading: "text-window-heading",
    subheading: "text-window-subheading",
    normal: "text-window",
  }

  const centerClass = centered ? "text-center" : ""

  return <Component className={`${variantClasses[variant]} ${centerClass} ${className}`}>{children}</Component>
}
