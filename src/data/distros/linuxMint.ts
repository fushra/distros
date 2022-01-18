import { Distro } from '..'
import { UsageType } from '../../views'
import { DesktopEnvironment } from '../enum'
import { Gnome } from '../ui/gnome'

const linuxMint: Distro = {
  name: 'Linux Mint',
  id: 'mint',
  logo: '',
  downloadWebpage: 'https://linuxmint.com/download.php',

  shortDescription:
    'An ubuntu based operating system with the goal to work "out of the box" and include useful defaults',
  longDescriptionPath: 'src/data/descriptions/linuxMint.md',

  ...Gnome,
  preferredAppCatagories: [
    ...Gnome.preferredAppCatagories,
    UsageType.Programing,
    UsageType.SinglePlayerGaming,
  ],
  desktopEnvironment: DesktopEnvironment.Cinnamon,

  screenShots: [
    'https://cdn.statically.io/img/www.linuxmint.com/f=auto&w=560/pictures/screenshots/una/thumb_cinnamon.png',
  ],
  videos: ['https://youtu.be/Z_ZAH7LWl-o', 'https://youtu.be/KqklXzC03HA'],
  dataContributors: ['trickypr'],
}

export default linuxMint
