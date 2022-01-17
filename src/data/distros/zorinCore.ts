import { Distro } from '..'
import { PreferredLookAndFeel } from '../../views'
import { Gnome } from '../ui/gnome'

const zorinCore: Distro = {
  name: 'Zorin OS Core',
  id: 'zorin-core',
  logo: 'https://assets.zorincdn.com/zorin.com/images/nav/logo.svg',
  downloadWebpage: 'https://zorin.com/os/download/',

  shortDescription:
    'Zorin OS is the alternative to Windows and macOS designed to make your computer faster, more powerful, secure, and privacy-respecting',
  longDescriptionPath: 'src/data/descriptions/zorinCore.md',

  ...Gnome,

  /**
   * Zorin os is based on a windows style
   */
  lookAndFeel: PreferredLookAndFeel.Windows10,

  screenShots: ['https://assets.zorincdn.com/zorin.com/images/home/speed.png'],
  videos: ['https://youtu.be/pgjHCGgitiU'],

  dataContributors: ['trickypr'],
}

export default zorinCore
