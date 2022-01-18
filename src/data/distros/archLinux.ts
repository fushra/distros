import { Distro } from '..'
import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
} from '../../views'
import { DesktopEnvironment, GeneralCategoryInfo, Toolkit } from '../enum'

const archLinux: Distro = {
  name: 'Arch Linux',
  id: 'arch',
  logo: '',
  downloadWebpage: 'https://archlinux.org/download/',

  shortDescription:
    "A tinkerer's os, built from the ground up by you the user to do what you need it to",
  longDescriptionPath: 'src/data/descriptions/arch.md',

  toolkit: Toolkit.None,

  experienceLevel: TechExperienceAmount.advanced,

  preferredAppCatagories: [],

  lookAndFeel: PreferredLookAndFeel.None,
  customisability: Customisability.advanced,

  generalCategory: GeneralCategoryInfo.Enthusiast,

  desktopEnvironment: DesktopEnvironment.None,

  screenShots: [],
  videos: ['https://youtu.be/hb2iA28ditc'],
  dataContributors: ['trickypr'],
}

export default archLinux
