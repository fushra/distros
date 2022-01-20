import { Distro } from '..'
import { UsageType } from '../enum'
import { Gnome } from '../ui/gnome'

const ubuntu: Distro = {
  name: 'Ubuntu',
  id: 'ubuntu',
  logo: '',
  downloadWebpage: 'https://ubuntu.com/download/desktop',

  shortDescription:
    'Canonicals desktop operating system, one of the largest Linux distributions',
  longDescriptionPath: 'src/data/descriptions/ubuntu.md',

  ...Gnome,
  preferredAppCatagories: [
    ...Gnome.preferredAppCatagories,
    UsageType.Programing,
  ],

  screenShots: [
    'https://cdn.statically.io/img/assets.ubuntu.com/f=auto&w=560/v1/1ebe9dec-netflix-x2.jpg',
  ],
  videos: ['https://youtu.be/SXfpbsCXUmE'],
  dataContributors: ['trickypr'],
}

export default ubuntu
