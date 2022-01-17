import { Distro } from '..'
import { Gnome } from '../ui/gnome'

const manjaroGnome: Distro = {
  name: 'Manjaro Gnome',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  /**
   * Grab the defaults for the desktop environment
   */
  ...Gnome,

  screenShots: [],
  videos: ['https://youtu.be/i2U2oZ1b4RQ'],
}

export default manjaroGnome
