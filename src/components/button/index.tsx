import React from 'react'
import styles from './button.module.css'

type ButtonStyle =
  | 'filled-primary'
  | 'filled-secondary'
  | 'filled-tertiary'
  | 'tonal-primary'
  | 'tonal-secondary'
  | 'tonal-tertiary'
  | 'outlined'
  | 'text'

export const Button = ({
  text,
  onClick,
  type,
}: {
  text: string
  onClick?: () => void
  type: ButtonStyle
}) => (
  <button
    className={`${styles.button} ${styles[type]}`}
    onClick={() => {
      if (onClick) onClick()
    }}
  >
    {text}
  </button>
)
