import { Distro } from '..'
import { TechExperienceAmount } from '../enum'
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

  screenShots: [],
  videos: ['https://youtu.be/I6WgT7JkkQk'],
  // Manjaro needs more experience than most distros
  experienceLevel: TechExperienceAmount.advanced,

  dataContributors: ['trickypr'],
}

export default manjaroXFCE
