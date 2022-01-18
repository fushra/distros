import { CSSProperties, ReactNode } from 'react'

export type GridJustify = 'flex-start' | 'center' | 'flex-end'

export const CardGrid = ({
  children,
  justify = 'center',
  style,
}: {
  children: ReactNode
  justify?: GridJustify
  style?: CSSProperties
}) => (
  <div
    style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: justify,
      marginTop: 16,
      ...style,
    }}
  >
    {' '}
    {children}{' '}
  </div>
)
