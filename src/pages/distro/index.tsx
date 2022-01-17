import Link from 'next/link'
import { Button, Card, CardGrid } from '../../components'
import { distros } from '../../data'

export default () => (
  <div style={{ textAlign: 'left', maxWidth: 870, margin: 'auto' }}>
    <h1>Distros</h1>
    <p>
      This is a big list of all the distros that the Fushra distro picker has
      access to. If a distro that you like or use isn't here, please feel free
      to{' '}
      <a href="https://github.com/fushra/distros">
        create a pull request on github
      </a>
    </p>

    <CardGrid justify="flex-start">
      {distros.map((distro) => (
        <Card
          type={'filled'}
          title={distro.name}
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
      ))}
    </CardGrid>
  </div>
)
