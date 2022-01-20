import { useState } from 'react'
import { GlobalData, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { TechExperienceAmount } from '../../data/enum'

// This is an exclusion rule for users that are under the intermediate level of
// experience. In this case it will return true if they are none or basic
export function atLeastIntermediate(data: GlobalData) {
  return data.experienceLevel === TechExperienceAmount.basic
}

export function atLeastExpert(data: GlobalData) {
  return data.experienceLevel !== TechExperienceAmount.advanced
}

export const TechExperience: ViewFc = ({ prevData, onNext, onPrev }) => {
  const [selected, setSelected] = useState(
    prevData.experienceLevel || TechExperienceAmount.basic
  )

  return (
    <div>
      <h1>Tech Experience</h1>
      <p>
        Different versions of linux are optimise for different levels of
        experience. Most users want linux to just work for them, however, some
        specific users may want to access some more complex functions that would
        reduce stability for regular users
      </p>

      <CardGrid>
        <Card
          type={'filled'}
          title="Basic"
          text="Open programs and files, and browse the internet"
          state={selected === TechExperienceAmount.basic ? 'focused' : 'none'}
          onClick={() => setSelected(TechExperienceAmount.basic)}
          interactive
        />
        <Card
          type={'filled'}
          title="Medium"
          text="Can install software from the internet and is ready to make obscure changes to windows / macos for performance reasons"
          state={
            selected === TechExperienceAmount.intermediate ? 'focused' : 'none'
          }
          onClick={() => setSelected(TechExperienceAmount.intermediate)}
          interactive
        />
        <Card
          type={'filled'}
          title="Advanced"
          text="Makes major changes to windows / macos, e.g. replacing window manager or task bar"
          state={
            selected === TechExperienceAmount.advanced ? 'focused' : 'none'
          }
          onClick={() => setSelected(TechExperienceAmount.advanced)}
          interactive
        />
      </CardGrid>

      <ButtonGrid>
        <Button text={'Back'} type={'text'} onClick={onPrev} />
        <Button
          text={'Next'}
          type={'filled-primary'}
          onClick={() => {
            const data = prevData
            data.experienceLevel = selected
            onNext(data)
          }}
        />
      </ButtonGrid>
    </div>
  )
}
