import { useState } from 'react'
import { ViewFc } from '..'
import { Button, Card, Center } from '../../components'
import { Distro } from '../../data'
import { generateScore, sortDistros } from './algorithm'

const DistroView = ({
  distro,
  score,
  maxScore,
}: {
  distro: Distro
  score: number
  maxScore: number
}) => (
  <Card
    type="filled"
    title={distro.name}
    subtitle={`${score} / ${maxScore}`}
    buttons={
      <>
        <Button text="Learn More" type="text" />
        <Button
          text="Download"
          type="filled-primary"
          onClick={() => window.open(distro.downloadWebpage, '_blank')}
        />
      </>
    }
  />
)

export const Done: ViewFc = ({ prevData, onPrev }) => {
  const [distros] = useState(sortDistros(prevData))
  console.log(distros)

  return (
    <div>
      <h1>Our recommendation</h1>
      <p>
        The distro listed below is our recommendation for what we can find out
        about you. If you don't think it is right, you can see more by clicking
        the 'View more' button
      </p>

      <Center>
        <DistroView
          distro={distros[0].distro}
          score={distros[0].score}
          maxScore={generateScore(prevData, prevData as any)}
        />
      </Center>

      <Button onClick={onPrev} text="Back" type="text"></Button>
    </div>
  )
}
