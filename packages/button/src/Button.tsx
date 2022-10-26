import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${className} text-primary`} {...props} type={type}>
      {children}
    </button>
  )
}
