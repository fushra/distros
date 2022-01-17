import { Distro } from '..'
import { KDE } from '../ui/kde'

const manjaroKDE: Distro = {
  name: 'Manjaro KDE',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  /**
   * Grab the defaults for the desktop environment
   */
  ...KDE,

  screenShots: [],
  videos: ['https://youtu.be/Mr9TkovpaME'],
}

export default manjaroKDE
