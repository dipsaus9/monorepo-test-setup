import type { AllHTMLAttributes } from "react"

import { Button } from "@dipsaus9/button"

export function Title({
  children,
  className = "",
  ...props
}: AllHTMLAttributes<HTMLHeadElement>) {
  return (
    <div className={`${className} drop-shadow-xl`} {...props}>
      <Button>{children}</Button>
    </div>
  )
}
