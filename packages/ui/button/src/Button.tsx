import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${className} text-colors`} {...props} type={type}>
      {children}
    </button>
  )
}
