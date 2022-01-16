import React, { ReactNode } from 'react'

export const Center = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'grid' }}>
    <div style={{ margin: 'auto' }}>{children}</div>
  </div>
)
