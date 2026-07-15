import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-hover',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
