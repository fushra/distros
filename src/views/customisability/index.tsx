import { useState } from 'react'
import { atLeastIntermediate, requiresSpecific, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { Customisability } from '../../data/enum'
import { desktopUser } from '../generalCategory'

export const Customization: ViewFc = ({
  prevData,
  onPrev,
  onNext,
  fromPrev,
}) => {
  const [customisability, setCustomisability] = useState(
    Customisability.intermediate
  )

  // Skip if the user has no or basic computer skills
  requiresSpecific(prevData, fromPrev, onPrev, onNext, atLeastIntermediate)
  requiresSpecific(prevData, fromPrev, onPrev, onNext, desktopUser)

  return (
    <div>
      <h1>Customisability</h1>
      <p>
        Different user interfaces will have different levels of customisability.
        Please chose your preferred amount below
      </p>

      <CardGrid>
        <Card
          type={'filled'}
          title="Limited"
          text="Allows you to change the desktop background and toggle between light and dark mode"
          onClick={() => setCustomisability(Customisability.limited)}
          state={
            customisability === Customisability.limited ? 'focused' : 'none'
          }
          interactive
        />
        <Card
          type={'filled'}
          title="Intermediate"
          text="Allows you to change application styles, the icons used for applications and the arrangement of items in the dock and panel"
          onClick={() => setCustomisability(Customisability.intermediate)}
          state={
            customisability === Customisability.intermediate
              ? 'focused'
              : 'none'
          }
          interactive
        />
        <Card
          type={'filled'}
          title="High"
          text="Allows you to rearrange all visual elements on the screen and replace them with multiple different items to fit your workflow"
          onClick={() => setCustomisability(Customisability.advanced)}
          state={
            customisability === Customisability.advanced ? 'focused' : 'none'
          }
          interactive
        />
      </CardGrid>

      <ButtonGrid>
        <Button text={'Back'} type={'text'} onClick={onPrev} />
        <Button
          text={'Next'}
          type={'filled-primary'}
          onClick={() => onNext({ ...prevData, customisability })}
        />
      </ButtonGrid>
    </div>
  )
}
