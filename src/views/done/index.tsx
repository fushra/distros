import Link from 'next/link'
import { useState } from 'react'
import { ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid, Center } from '../../components'
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
    text={distro.shortDescription}
    buttons={
      <>
        <Link href={`/distro/${distro.id}`}>
          <a>
            <Button text="Learn More" type="text" />
          </a>
        </Link>
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
  const [extraCount, setExtraCount] = useState(0)

  const maxScore = generateScore(prevData, prevData as any)

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
          maxScore={maxScore}
        />
      </Center>

      <CardGrid>
        {distros
          .filter((_val, index) => index !== 0)
          .filter((_val, index) => index < extraCount)
          .map((distro) => (
            <DistroView
              distro={distro.distro}
              score={distro.score}
              maxScore={maxScore}
            />
          ))}
      </CardGrid>

      <ButtonGrid>
        <Button onClick={onPrev} text="Back" type="text"></Button>
        <Button
          type="filled-primary"
          text="More options"
          onClick={() => setExtraCount(() => extraCount + 1)}
        />
      </ButtonGrid>
    </div>
  )
}
