import { Distro } from '..'
import { KDE } from '../ui/kde'

const kdeNeon: Distro = {
  name: 'KDE Neon',
  id: 'kde-neon',
  logo: '',
  downloadWebpage: 'https://neon.kde.org/download',

  shortDescription:
    'The latest and greatest of KDE community software packaged on a rock-solid base. ',
  longDescriptionPath: 'src/data/descriptions/kdeNeon.md',

  /**
   * Grab the defaults for the desktop environment
   */
  ...KDE,

  screenShots: [
    'https://cdn.statically.io/img/neon.kde.org/f=auto&w=560/content/home/laptop.png',
  ],
  videos: ['https://youtu.be/22z0JmnqP9o'],

  dataContributors: ['trickypr'],
}

export default kdeNeon
