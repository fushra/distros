import { Distro } from '..'
import { TechExperienceAmount } from '../../views'
import { XFCE } from '../ui/xfce'

const manjaroXFCE: Distro = {
  name: 'Manjaro XFCE',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  ...XFCE,

  /**
   * Manjaro's package manager (pamac) is slightly less easy to use than some
   * other distros (e.g. pop shop), so it gets a usability downgrade
   */
  recommendedExperience: TechExperienceAmount.intermediate,

  screenShots: [],
  videos: ['https://youtu.be/I6WgT7JkkQk'],
}

export default manjaroXFCE
