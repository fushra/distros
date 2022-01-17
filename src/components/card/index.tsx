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
}: {
  buttons?: ReactNode
  title?: string
  subtitle?: string
  text?: string
  type: CardType
  state?: CardState
  img?: string
  imgAlt?: string
  onClick?: () => void
}) => (
  <Ripples>
    <div
      className={`${style.card} ${style[type]} ${style[state]}`}
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      {img && <img src={img} alt={imgAlt} />}

      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {text && <p>{text}</p>}
      {buttons && <ButtonGrid className={style.buttons}>{buttons}</ButtonGrid>}
    </div>
  </Ripples>
)