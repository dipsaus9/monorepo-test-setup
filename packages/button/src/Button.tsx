import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="text-sm" {...props} type={type}>
      {children}
    </button>
  )
}
