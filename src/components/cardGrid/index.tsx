import { ReactNode } from 'react'

export type GridJustify = 'flex-start' | 'center' | 'flex-end'

export const CardGrid = ({
  children,
  justify = 'center',
}: {
  children: ReactNode
  justify?: GridJustify
}) => (
  <div
    style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: justify,
    }}
  >
    {' '}
    {children}{' '}
  </div>
)
