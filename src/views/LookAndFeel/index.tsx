import { useState } from 'react'
import { ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'

// See the license file in the same folder for image licenses
import mac from './ux-concept-answer-mac-like.png'
import windows from './ux-concept-answer-windows-like.png'

export enum PreferredLookAndFeel {
  Mac = 'mac',
  Windows10 = 'windows10',
}

export const LookAndFeel: ViewFc = ({ prevData, onPrev, onNext }) => {
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
          img={windows}
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
          img={mac}
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