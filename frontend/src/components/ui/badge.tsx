import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"


export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        className
      )}
      {...props}
    />
  )
}
