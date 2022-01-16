import { ReactNode } from 'react'

export const ButtonGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 4 }}
    className={className}
  >
    {children}
  </div>
)
