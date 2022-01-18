import Head from 'next/head'
import React from 'react'
import { Center } from '../components'
import { distros } from '../data'
import { Done, TechExperience, ViewFc, Welcome } from '../views'
import { Customization } from '../views/customisability'
import { GeneralCategory } from '../views/generalCategory'
import { LookAndFeel } from '../views/LookAndFeel'
import { Usage } from '../views/usage'

const views: ViewFc[] = [
  Welcome,
  TechExperience,
  GeneralCategory,
  Usage,
  LookAndFeel,
  Customization,
  Done,
]

function App() {
  const [currentView, setCurrentView] = React.useState(0)
  const [data, setData] = React.useState({})
  const [goingBack, setGoingBack] = React.useState(false)

  const ViewToRender = views[currentView]

  return (
    <main style={{ height: '100%' }}>
      <Head>
        <title>Find your distro - Fushra distro picker</title>
        <meta
          name="description"
          content={`Fushra distro picker is a tool designed to help you find a linux distro to suit your needs! We use an open source dataset and algorithm sort through ${distros.length} and find the perfect one for you!`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={`Sort through ${distros.length} to find the perfect one for you`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Fushra distro picker is a tool designed to help you find a linux distro to suit your needs! We use an open source dataset and algorithm sort through ${distros.length} and find the perfect one for you!`}
        />
        <meta property="og:image" content="/og/index.1.png" />
      </Head>

      <Center childStyle={{ maxWidth: 780 }}>
        <ViewToRender
          prevData={data}
          fromPrev={goingBack}
          onNext={(newData) => {
            setData(newData)
            setGoingBack(false)
            setCurrentView(currentView + 1)
          }}
          onPrev={() => {
            setGoingBack(true)
            setCurrentView(currentView - 1)
          }}
        />
      </Center>
    </main>
  )
}

export default App
