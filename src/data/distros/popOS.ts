import { Distro } from '..'
import { Gnome } from '../ui/gnome'

const popOS: Distro = {
  name: 'Pop!_OS',
  logo: 'https://avatars.githubusercontent.com/u/33131755',
  downloadWebpage: 'https://pop.system76.com/',

  ...Gnome,

  screenShots: [],
  videos: [],
}

export default popOS
