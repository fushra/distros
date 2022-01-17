//! This is the index file responsible for registering distros and, in the future,
//! applications to be processed into a single json file. Add your distros to the
//! appropriate arrays in this file

import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
} from '../views'
import { UsageType } from '../views/usage'
import manjaroGnome from './distros/manjaroGnome'
import manjaroKDE from './distros/manjaroKDE'
import manjaroXFCE from './distros/manjaroXFCE'
import popOS from './distros/popOS'
import zorinCore from './distros/zorinCore'
import { DesktopEnvironment, Toolkit } from './enum'

export interface Distro {
  name: string
  id: string
  logo: string

  shortDescription: string
  longDescriptionPath: string

  downloadWebpage: string
  desktopEnvironment: DesktopEnvironment
  toolkit: Toolkit
  experienceLevel: TechExperienceAmount
  preferredAppCatagories: UsageType[]
  lookAndFeel: PreferredLookAndFeel
  customisability: Customisability
  screenShots: string[]
  videos: string[]
  dataContributors: string[]
}

let internalDistros: Distro[] = [
  manjaroKDE,
  manjaroGnome,
  manjaroXFCE,
  popOS,
  zorinCore,
]

// Apply a limited customisability set to everything using gnome because GTK 4
// has broken themes and the gnome team seems to not be working on fixing that
// bug
internalDistros = internalDistros.map((distro) => {
  if (distro.toolkit === Toolkit.GNOME) {
    return {
      ...distro,
      customisability:
        distro.customisability === Customisability.limited
          ? Customisability.limited
          : Customisability.partialIntermediate,
    }
  }

  return distro
})

// Linters for various issues that should be checked for and corrected before data
// is exported
internalDistros.forEach((distros) => {
  // Youtube links should **ONLY** be youtu.be links for the sake of being easy
  // to parse and should include the full https://youtu.be/ part
  distros.videos.forEach((video, index) => {
    if (video.includes('youtube.com')) {
      console.warn(
        `WARN - Youtube links should only be youtu.be links (distro: ${distros.name}, video: ${video}, index: ${index})`
      )
    }

    if (video.includes('youtu.be') && !video.includes('https://youtu.be/')) {
      console.warn(
        `WARN - youtu.be links must be full links (i.e. https://youtu.be/...) (distro: ${distros.name}, video: ${video}, index: ${index})`
      )
    }
  })
})

export const distros = internalDistros
