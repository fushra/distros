import { Distro } from '..'
import { Gnome } from '../ui/gnome'

const manjaroGnome: Distro = {
  name: 'Manjaro Gnome',
  id: 'manjaro-gnome',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  shortDescription:
    'The manjaro edition for people who want a very modern and simple desktop',
  longDescriptionPath: 'src/data/descriptions/manjaroGnome.md',

  /**
   * Grab the defaults for the desktop environment
   */
  ...Gnome,

  screenShots: [],
  videos: ['https://youtu.be/i2U2oZ1b4RQ'],
  dataContributors: ['trickypr'],
}

export default manjaroGnome
