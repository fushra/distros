import { Distro } from '..'
import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
} from '../../views'
import { DesktopEnvironment, GeneralCategoryInfo, Toolkit } from '../enum'

export const ubuntuServer: Distro = {
  name: 'Ubuntu Server',
  id: 'ubuntu-server',
  logo: '',
  downloadWebpage: 'https://ubuntu.com/download/server',

  shortDescription:
    "Canonical's server os, with support from major hardware and software companies",
  longDescriptionPath: 'src/data/descriptions/ubuntuServer.md',

  desktopEnvironment: DesktopEnvironment.None,
  toolkit: Toolkit.None,
  experienceLevel: TechExperienceAmount.advanced,
  preferredAppCatagories: [],
  lookAndFeel: PreferredLookAndFeel.None,
  customisability: Customisability.advanced,
  generalCategory: GeneralCategoryInfo.Server,

  screenShots: [],
  videos: [],

  dataContributors: ['trickypr'],
}

export default ubuntuServer
