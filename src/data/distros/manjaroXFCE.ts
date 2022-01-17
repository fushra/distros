import { Distro } from '..'
import { TechExperienceAmount } from '../../views'
import { XFCE } from '../ui/xfce'

const manjaroXFCE: Distro = {
  name: 'Manjaro XFCE',
  id: 'manjaro-xfce',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  shortDescription:
    'The manjaro edition for people who want a reliable and fast desktop',
  longDescriptionPath: 'src/data/descriptions/manjaroXFCE.md',

  ...XFCE,

  /**
   * Manjaro's package manager (pamac) is slightly less easy to use than some
   * other distros (e.g. pop shop), so it gets a usability downgrade
   */
  experienceLevel: TechExperienceAmount.intermediate,

  screenShots: [],
  videos: ['https://youtu.be/I6WgT7JkkQk'],

  dataContributors: ['trickypr'],
}

export default manjaroXFCE
