import { Customisability, GlobalData, TechExperienceAmount } from '..'
import { Distro, distros } from '../../data'
import { GeneralCategoryInfo } from '../../data/enum'

function intersection<T>(a: T[], b: T[]): T[] {
  return a
    .filter((key) => b.includes(key))
    .filter((key, index, array) => array.indexOf(key) === index)
}

const techExperienceValue = (techExperience: TechExperienceAmount) => {
  let val = 0

  switch (techExperience) {
    case TechExperienceAmount.none:
      val = 0
      break
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

  // Return a score of zero if the general category is incorrect
  if (
    (userInput.generalCategory || GeneralCategoryInfo.Desktop) !==
    (distro.generalCategory || GeneralCategoryInfo.Desktop)
  ) {
    return 0
  } else {
    score += 4
  }

  if (userInput.experienceLevel) {
    const userExperience = techExperienceValue(userInput.experienceLevel)
    const distroExperience = techExperienceValue(distro.experienceLevel)

    const diff = Math.abs(userExperience - distroExperience)
    // Experience level should be heavily weighted
    score += (3 - diff) * 2
  }

  if (userInput.lookAndFeel) {
    score += userInput.lookAndFeel === distro.lookAndFeel ? 2 : 0
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

    const diff = distroCustomisability - userCustomisability

    // Make distros more customizable than the users choice more heavily weighted
    score += diff > 0 ? 4 - diff : (4 - Math.abs(diff)) / 2
  }

  return score
}

export type DistroWithScore = {
  distro: Distro
  score: number
}

export function sortDistros(userInput: GlobalData): DistroWithScore[] {
  return distros
    .map((distro) => ({
      distro,
      score: generateScore(userInput, distro),
    }))
    .sort((a, b) => a.score - b.score)
    .reverse()
}
