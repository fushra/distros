# How to contribute

Hi, I am glad you are interested in contributing to this repo. As the only maintainer (at the moment), I can comfortably say that I am not going to be able to do everything, so here are a few things you can do.

- Finding and reporting bugs to the issue tracker
- Adding distributions or updating them
- Improving the web front end

If you think you need help at any point, feel free to ping me (@trickypr) on [our discord server](https://discord.gg/xNkretH7sD).

## Adding or updating distro data

First, you will need to fork and clone down to your computer:

```sh
git clone <fork_username>/distros
```

Next, cd into it, and download all the dependencies using yarn.

```sh
yarn
```

From here on out, you can add a new distro to the database. If you are modifying a distro, the following will be helpful as a reference. You will need to create a `.ts` file for your distro. If the distro just ships a single distro, just have `src/data/distros/distroName.ts`, however, if it ships multiple flavours, add `src/data/distros/distroNameDE.ts` or similar.

Then, you will want to add this template to the new file.

```ts
import { Distro } from '..'
import { DE_NAME } from '../ui/<de>'

const distroNameDE: Distro = {
  name: 'Manjaro KDE',
  id: 'manjaro-kde',
  logo: 'https://manjaro.org/img/logo.svg',
  downloadWebpage: 'https://manjaro.org/download/',

  shortDescription:
    'The manjaro edition with a built-in interface to easily access and install themes, widgets, etc. While very user-friendly and certainly flashy',
  longDescriptionPath: 'src/data/descriptions/manjaroKDE.md',

  /**
   * Grab the defaults for the desktop environment
   */
  ...DE_NAME,

  screenShots: [],
  videos: ['https://youtu.be/Mr9TkovpaME'],

  dataContributors: ['trickypr'],
}

export default distroNameDE
```

If the DE for your distro doesn't exist, you can create it. If you want to know what options are available, you can look at the `Distro` interface in `src/data/index.ts`.

## Improving the web front end

The UI is built in [nextjs](https://nextjs.org/docs/getting-started), which has hight quality documentation. The algorithm for recommendations, is located in `src/views/done/algorithm.ts`. The rest of the structure should be fairly standard.
