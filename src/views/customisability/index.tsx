import { useState } from 'react'
import { atLeastIntermediate, requiresSpecific, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { desktopUser } from '../generalCategory'

export enum Customisability {
  limited = 'Wallpaper',
  /**
   * NOT TO BE USER EXPOSED. Used to represent a desktop where some apps accept
   * theming and some apps do not. This appears to be the case for gtk4 desktops
   * so all gtk-based desktops (gtk2, gtk3, gtk4) will be put under this category
   * as they share apps (e.g. blanket) until the gnome team gets their act
   * together and fixes whatever bug is causing gtk themes to not work with
   * gtk4 apps
   *
   * Also, these desktops cannot be advanced beyond partial intermediate, even if
   * they have advanced or partial advanced functionality
   */
  partialIntermediate = 'Broken theming',
  intermediate = 'Themable',

  /**
   * NOT TO BE USER EXPOSED. Used to represent a desktop where some panels, but not
   * all can be replaced or desktops where it is a real hassle to do it. Add to
   * review notes if you give something this
   */
  partialAdvanced = 'Partial layout',
  advanced = 'Full layout',
}

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
        />
        <Card
          type={'filled'}
          title="High"
          text="Allows you to rearrange all visual elements on the screen and replace them with multiple different items to fit your workflow"
          onClick={() => setCustomisability(Customisability.advanced)}
          state={
            customisability === Customisability.advanced ? 'focused' : 'none'
          }
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
