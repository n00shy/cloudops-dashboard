import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from "react"


export function Button({
 className,
 ...props
}: ButtonHTMLAttributes<HTMLButtonElement>){

 return (

  <button
   className={cn(
    "rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground",
    className
   )}
   {...props}
  />

 )

}
