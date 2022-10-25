import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="text-xl text-primary" {...props} type={type}>
      {children}
    </button>
  )
}
