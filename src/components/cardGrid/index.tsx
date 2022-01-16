import { ReactNode } from 'react'

export const CardGrid = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}> {children} </div>
)
