import { GlobalData } from '..'
import { Distro, distros } from '../../data'
import {
  Customisability,
  GeneralCategoryInfo,
  TechExperienceAmount,
} from '../../data/enum'

function intersection<T>(a: T[], b: T[]): T[] {
  return a
    .filter((key) => b.includes(key))
    .filter((key, index, array) => array.indexOf(key) === index)
}

const techExperienceValue = (techExperience: TechExperienceAmount) => {
  let val = 0

  switch (techExperience) {
    case TechExperienceAmount.basic:
      val = 1
      break
    case TechExperienceAmount.intermediate:
      val = 2
      break
    case TechExperienceAmount.advanced:
      val = 3
      break
  }

  return val
}

const customisabilityValue = (customisability: Customisability) => {
  let val = 0

  switch (customisability) {
    case Customisability.limited:
      val = 0
      break
    case Customisability.partialIntermediate:
      val = 1
      break
    case Customisability.intermediate:
      val = 2
      break
    case Customisability.partialAdvanced:
      val = 3
      break
    case Customisability.advanced:
      val = 4
  }

  return val
}

export function generateScore(userInput: GlobalData, distro: Distro): number {
  let score = 0

  if (userInput.experienceLevel) {
    const userExperience = techExperienceValue(userInput.experienceLevel)
    const distroExperience = techExperienceValue(distro.experienceLevel)

    const diff = userExperience - distroExperience
    // Experience level should be heavily weighted
    score += diff < 0 ? 4 - diff * -1 : (4 - diff) * 2
  }

  if (userInput.lookAndFeel) {
    // Heavily weight look and feel
    score += userInput.lookAndFeel === distro.lookAndFeel ? 4 : 0
  }

  if (userInput.preferredAppCatagories) {
    const duplicateCount = intersection(
      userInput.preferredAppCatagories,
      distro.preferredAppCatagories
    )
    score += duplicateCount.length
  }

  if (userInput.customisability) {
    const userCustomisability = customisabilityValue(userInput.customisability)
    const distroCustomisability = customisabilityValue(distro.customisability)

    const diff = Math.abs(distroCustomisability - userCustomisability)
    score += 4 - diff
  }

  return score
}

export type DistroWithScore = {
  distro: Distro
  score: number
}

export function sortDistros(userInput: GlobalData): DistroWithScore[] {
  return distros
    .filter(
      (distro) =>
        (userInput.generalCategory || GeneralCategoryInfo.Desktop) ===
        (distro.generalCategory || GeneralCategoryInfo.Desktop)
    )
    .filter(
      (distro) =>
        techExperienceValue(distro.experienceLevel) <=
        techExperienceValue(
          userInput.experienceLevel || TechExperienceAmount.basic
        )
    )
    .map((distro) => ({
      distro,
      score: generateScore(userInput, distro),
    }))
    .sort((a, b) => a.score - b.score)
    .reverse()
}
