import { useState } from 'react'
import { requiresSpecific, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { desktopUser } from '../generalCategory'

export enum PreferredLookAndFeel {
  Mac = 'Mac like',
  Windows10 = 'Windows like',
}

export const LookAndFeel: ViewFc = ({ prevData, onPrev, onNext, fromPrev }) => {
  requiresSpecific(prevData, fromPrev, onPrev, onNext, desktopUser)
  const [preferredLookAndFeel, setPreferredLookAndFeel] =
    useState<PreferredLookAndFeel>(
      prevData.lookAndFeel || PreferredLookAndFeel.Mac
    )

  return (
    <div>
      <h1>Look and Feel</h1>
      <p>
        What of the following two UIs to you feel more familiar with or prefer?
      </p>

      <CardGrid>
        <Card
          type={'filled'}
          title="Windows 10"
          img="/ux-concept-answer-windows-like.png"
          imgAlt="An operating system image that has the same structure as windows 10"
          onClick={() =>
            setPreferredLookAndFeel(PreferredLookAndFeel.Windows10)
          }
          state={
            preferredLookAndFeel === PreferredLookAndFeel.Windows10
              ? 'focused'
              : 'none'
          }
        />
        <Card
          type={'filled'}
          title="MacOS"
          img="/ux-concept-answer-mac-like.png"
          imgAlt="An operating system image that has the same structure as MacOS"
          onClick={() => setPreferredLookAndFeel(PreferredLookAndFeel.Mac)}
          state={
            preferredLookAndFeel === PreferredLookAndFeel.Mac
              ? 'focused'
              : 'none'
          }
        />
      </CardGrid>

      <ButtonGrid>
        <Button text={'Back'} type={'text'} onClick={onPrev} />
        <Button
          text={'Next'}
          type={'filled-primary'}
          onClick={() =>
            onNext({
              ...prevData,
              lookAndFeel: preferredLookAndFeel,
            })
          }
        />
      </ButtonGrid>
    </div>
  )
}
