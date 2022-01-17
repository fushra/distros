import React, { CSSProperties, ReactNode } from 'react'

export const Center = ({
  children,
  childStyle,
  parentStyle,
}: {
  children: ReactNode
  parentStyle?: CSSProperties
  childStyle?: CSSProperties
}) => (
  <div style={{ display: 'grid', height: '100%', ...parentStyle }}>
    <div style={{ margin: 'auto', ...childStyle }}>{children}</div>
  </div>
)
