//! This is the index file responsible for registering distros and, in the future,
//! applications to be processed into a single json file. Add your distros to the
//! appropriate arrays in this file

import archLinux from './distros/archLinux'
import kdeNeon from './distros/KDENeon'
import linuxMint from './distros/linuxMint'
import manjaroGnome from './distros/manjaroGnome'
import manjaroKDE from './distros/manjaroKDE'
import manjaroXFCE from './distros/manjaroXFCE'
import popOS from './distros/popOS'
import ubuntu from './distros/ubuntu'
import ubuntuServer from './distros/ubuntuServer'
import zorinCore from './distros/zorinCore'
import {
  Customisability,
  DesktopEnvironment,
  GeneralCategoryInfo,
  PreferredLookAndFeel,
  TechExperienceAmount,
  Toolkit,
  UsageType,
} from './enum'

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
  ubuntuServer,
].sort((a, b) => a.name.localeCompare(b.name))

export const distros = internalDistros
