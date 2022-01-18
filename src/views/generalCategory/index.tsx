import { useState } from 'react'
import { atLeastExpert, GlobalData, requiresSpecific, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { GeneralCategoryInfo } from '../../data/enum'

export function desktopUser(data: GlobalData): boolean {
  return (
    data.generalCategory === GeneralCategoryInfo.Desktop ||
    !!data.generalCategory
  )
}

export const GeneralCategory: ViewFc = ({
  prevData,
  onPrev,
  onNext,
  fromPrev,
}) => {
  const [category, setCategory] = useState(GeneralCategoryInfo.Desktop)
  requiresSpecific(prevData, fromPrev, onPrev, onNext, atLeastExpert)

  return (
    <div>
      <h1>General Category</h1>
      <p>What of the following options best describes you and your use case</p>

      <CardGrid>
        <Card
          type="filled"
          title="Desktop"
          text="Use as a desktop computer with compatibility and stability in mind"
          state={category === GeneralCategoryInfo.Desktop ? 'focused' : 'none'}
          onClick={() => setCategory(GeneralCategoryInfo.Desktop)}
        />
        <Card
          type="filled"
          title="Enthusiast"
          text="Using Linux as a hobby, with a manual install process, extreme level of customization and a high time requirement."
          state={
            category === GeneralCategoryInfo.Enthusiast ? 'focused' : 'none'
          }
          onClick={() => setCategory(GeneralCategoryInfo.Enthusiast)}
        />
        <Card
          type="filled"
          title="Server"
          text="Hosting online applications or scripts that require a high degree of stability and security"
          state={category === GeneralCategoryInfo.Server ? 'focused' : 'none'}
          onClick={() => setCategory(GeneralCategoryInfo.Server)}
        />
      </CardGrid>

      <ButtonGrid>
        <Button type="text" text="Back" onClick={() => onPrev()} />
        <Button
          type="filled-primary"
          text="Next"
          onClick={() => onNext({ ...prevData, generalCategory: category })}
        />
      </ButtonGrid>
    </div>
  )
}
