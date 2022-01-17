import { FC } from 'react'
import { Customisability } from './customisability'
import { PreferredLookAndFeel } from './LookAndFeel'
import { TechExperienceAmount } from './techExperience'
import { UsageType } from './usage'
import viewStyle from './views.module.css'

interface PossibleGlobalData {
  experienceLevel: TechExperienceAmount
  usage: UsageType[]
  preferredLookAndFeel: PreferredLookAndFeel
  customisability: Customisability
}

export type GlobalData = Partial<PossibleGlobalData>

export interface ViewProps {
  prevData: GlobalData
  fromPrev: boolean
  onNext: (newData: GlobalData) => void
  onPrev: () => void
}

export function requiresSpecific(
  prevData: GlobalData,
  fromPrev: boolean,
  onPrev: () => void,
  onNext: (data: GlobalData) => void,
  ...skipCases: ((prevData: GlobalData) => boolean)[]
) {
  // If one of the skip cases returns true, then we should skip the entire
  // view that we currently have open
  if (skipCases.map((caseFn) => caseFn(prevData)).some((el) => el)) {
    if (fromPrev) {
      onPrev()
    } else {
      onNext(prevData)
    }
  }
}

export type ViewFc = FC<ViewProps>

export const viewDefaultStyle = viewStyle

export * from './welcome'
export * from './techExperience'
export * from './usage'
export * from './LookAndFeel'
export * from './customisability'
export * from './done'
