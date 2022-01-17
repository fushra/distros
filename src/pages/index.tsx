import React from 'react'
import { Center } from '../components'
import { Done, TechExperience, ViewFc, Welcome } from '../views'
import { Customization } from '../views/customisability'
import { LookAndFeel } from '../views/LookAndFeel'
import { Usage } from '../views/usage'

const views: ViewFc[] = [
  Welcome,
  TechExperience,
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
    <div style={{ height: '100vh' }}>
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
    </div>
  )
}

export default App
