import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-accent-muted/30 px-2.5 py-0.5 text-xs font-medium text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
