import { CSSProperties } from 'react'
import { ReactNode } from 'react'
import Ripples from 'react-ripples'

import { ButtonGrid } from '../buttonGrid'
import style from './card.module.css'

export type CardType = 'filled'

export type CardState = 'none' | 'focused'

export const Card = ({
  type,
  state = 'none',
  title,
  subtitle,
  text,
  buttons,
  onClick,
  img,
  imgAlt,
  children,
  style: cardStyle,
  interactive = false,
}: {
  buttons?: ReactNode
  title?: string
  subtitle?: string
  text?: string
  type: CardType
  state?: CardState
  img?: string
  imgAlt?: string
  children?: JSX.Element
  onClick?: () => void
  style?: CSSProperties
  interactive?: boolean
}) => (
  <div
    className={`${style.card} ${style[type]} ${style[state]} ${
      interactive ? style.interactive : ''
    }`}
    onClick={() => {
      if (onClick) onClick()
    }}
    style={cardStyle}
  >
    {img && <img src={img} alt={imgAlt} />}

    {title && <h2>{title}</h2>}
    {subtitle && <h3>{subtitle}</h3>}
    {text && <p>{text}</p>}
    {buttons && (
      <ButtonGrid className={style.buttons} justify="flex-end">
        {buttons}
      </ButtonGrid>
    )}

    {children}
  </div>
)
