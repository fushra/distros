import { Distro } from '..'
import { TechExperienceAmount } from '../enum'
import { KDE } from '../ui/kde'

const manjaroKDE: Distro = {
  name: 'Manjaro KDE',
  id: 'manjaro-kde',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  shortDescription:
    'The manjaro edition with a built-in interface to easily access and install themes, widgets, etc. While very user-friendly and certainly flashy',
  longDescriptionPath: 'src/data/descriptions/manjaroKDE.md',

  /**
   * Grab the defaults for the desktop environment
   */
  ...KDE,

  screenShots: [],
  videos: ['https://youtu.be/Mr9TkovpaME'],
  // Manjaro needs more experience than most distros
  experienceLevel: TechExperienceAmount.advanced,

  dataContributors: ['trickypr'],
}

export default manjaroKDE
