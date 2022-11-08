import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} text-colors-brand-secondary-50`}
      {...props}
      type={type}
    >
      {children}
    </button>
  )
}
