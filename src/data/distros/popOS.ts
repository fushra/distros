import { Distro } from '..'
import { UsageType } from '../enum'
import { Gnome } from '../ui/gnome'

const popOS: Distro = {
  name: 'Pop!_OS',
  id: 'pop-os',
  logo: 'https://avatars.githubusercontent.com/u/33131755',
  downloadWebpage: 'https://pop.system76.com/',

  shortDescription:
    'A gaming and productivity focused distro created by system76',
  longDescriptionPath: 'src/data/descriptions/popOS.md',

  ...Gnome,
  preferredAppCatagories: [
    UsageType.Email,
    // Not going to give Gnome any points for development because gnome builder
    // seems to be basically unusable on my system for reasons I cannot entirely
    // comprehend
    /**
     * Gnome has a default browser (unlike kde or xfce), so I will give it that
     * point even through it is horrible and you should avoid using it
     */
    UsageType.WebBrowsing,
    UsageType.SinglePlayerGaming,
  ],

  screenShots: [],
  videos: ['https://youtu.be/y-uUv1jkKOQ'],

  dataContributors: ['trickypr'],
}

export default popOS
