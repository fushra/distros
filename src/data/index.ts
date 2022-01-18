//! This is the index file responsible for registering distros and, in the future,
//! applications to be processed into a single json file. Add your distros to the
//! appropriate arrays in this file

import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
} from '../views'
import { UsageType } from '../views/usage'
import archLinux from './distros/archLinux'
import kdeNeon from './distros/KDENeon'
import linuxMint from './distros/linuxMint'
import manjaroGnome from './distros/manjaroGnome'
import manjaroKDE from './distros/manjaroKDE'
import manjaroXFCE from './distros/manjaroXFCE'
import popOS from './distros/popOS'
import ubuntu from './distros/ubuntu'
import zorinCore from './distros/zorinCore'
import { DesktopEnvironment, GeneralCategoryInfo, Toolkit } from './enum'

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
  generalCategory: GeneralCategoryInfo
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
  ubuntu,
  kdeNeon,
  linuxMint,
  archLinux,
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

export const distros = internalDistros
