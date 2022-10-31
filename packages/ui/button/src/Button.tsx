import type { ButtonHTMLAttributes } from "react"

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} text-color-font-base`}
      {...props}
      type={type}
    >
      {children}
    </button>
  )
}
