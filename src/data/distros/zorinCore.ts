import { Distro } from '..'
import { PreferredLookAndFeel } from '../../views'
import { Gnome } from '../ui/gnome'

const zorinCore: Distro = {
  name: 'Zorin OS Core',
  id: 'zorin-core',
  logo: 'https://assets.zorincdn.com/zorin.com/images/nav/logo.svg',
  downloadWebpage: 'https://zorin.com/os/download/',

  ...Gnome,

  /**
   * Zorin os is based on a windows style
   */
  lookAndFeel: PreferredLookAndFeel.Windows10,

  screenShots: ['https://assets.zorincdn.com/zorin.com/images/home/speed.png'],
  videos: [],

  dataContributors: ['trickypr'],
}

export default zorinCore
