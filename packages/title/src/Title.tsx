import type { AllHTMLAttributes } from "react"

import { Button } from "@dipsaus9/button"

export function Title({
  children,
  ...props
}: AllHTMLAttributes<HTMLHeadElement>) {
  return (
    <div className="drop-shadow-xl" {...props}>
      <Button>{children}</Button>
    </div>
  )
}
