import Head from 'next/head'
import Link from 'next/link'
import { Button, Card, CardGrid } from '../../components'
import { distros } from '../../data'

export default () => (
  <main style={{ textAlign: 'left', maxWidth: 870, margin: 'auto' }}>
    <Head>
      <title>List of supported distros - Fushra distro picker</title>
      <meta
        name="description"
        content={`Want to browse the linux distros available for the Fushra distro picker? This is the perfect page for you! It lists all ${distros.length} that we have data for`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

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
          key={distro.id}
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
  </main>
)
