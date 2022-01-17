import { Customisability, GlobalData, TechExperienceAmount } from '..'
import { Distro, distros } from '../../data'

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

function generateScore(userInput: GlobalData, distro: Distro): number {
  let score = 0

  if (userInput.experienceLevel) {
    const userExperience = techExperienceValue(userInput.experienceLevel)
    const distroExperience = techExperienceValue(distro.recommendedExperience)

    const diff = Math.abs(userExperience - distroExperience)
    // Experience level should be heavily weighted
    score += (3 - diff) * 2
  }

  if (userInput.preferredLookAndFeel) {
    score += userInput.preferredLookAndFeel === distro.lookAndFeel ? 2 : 0
  }

  if (userInput.usage) {
    const duplicateCount = intersection(
      userInput.usage,
      distro.preferredAppCatagories
    )
    score += duplicateCount.length
  }

  if (userInput.customisability) {
    const userCustomisability = customisabilityValue(userInput.customisability)
    const distroCustomisability = customisabilityValue(distro.customisability)

    const diff = Math.abs(userCustomisability - distroCustomisability)
    score += 4 - diff
  }

  return score
}

export function sortDistros(userInput: GlobalData) {
  return distros
    .map((distro) => ({
      distro,
      score: generateScore(userInput, distro),
    }))
    .sort((a, b) => a.score - b.score)
}
