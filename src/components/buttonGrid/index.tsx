import { ReactNode } from 'react'
import { GridJustify } from '..'

export const ButtonGrid = ({
  children,
  className,
  justify = 'center',
}: {
  children: ReactNode
  className?: string
  justify?: GridJustify
}) => (
  <div
    style={{
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap',
      marginTop: 8,
      justifyContent: justify,
    }}
    className={className}
  >
    {children}
  </div>
)
