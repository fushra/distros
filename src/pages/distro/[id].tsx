import { remark } from 'remark'
import html from 'remark-html'

import { readFile } from 'fs/promises'
import { join } from 'path'

import { Distro, distros } from '../../data'
import { Button, Card, CardGrid } from '../../components'
import { Customisability } from '../../views'
import Head from 'next/head'

type Props = Distro & {
  longDescription: string
}

const DistroAboutPage = ({ distro }: { distro: Props }) => {
  // HACK: Nextjs has issues if this isn't included because for some reason, distro is sometimes undefined
  if (!distro) return <div></div>

  return (
    <main style={{ textAlign: 'left', maxWidth: 1080, margin: 'auto' }}>
      <Head>
        <title>{distro.name} - Fushra distro picker</title>
        <meta
          name="description"
          content={`Learn more about ${distro.name}. ${distro.shortDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={`${distro.name}: Images, description and specs`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={distro.shortDescription} />
      </Head>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>{distro.name}</h1>
          <p style={{ margin: 0 }}>{distro.shortDescription}</p>
        </div>
        <Button
          text="Download"
          type="filled-primary"
          onClick={() => window.open(distro.downloadWebpage, '_blank')}
        />
      </div>

      <div style={{ overflowX: 'scroll' }}>
        <CardGrid
          justify="flex-start"
          style={{ flexWrap: 'nowrap', width: 'max-content' }}
        >
          {distro.videos.map((video) => {
            if (video.includes('https://youtu.be/')) {
              return (
                <Card
                  key={video.replace('https://youtu.be/', '')}
                  type={'filled'}
                  style={{
                    padding: 0,
                    width: 560,
                    height: 315,
                    maxWidth: 560,
                  }}
                >
                  <iframe
                    style={{ borderRadius: 12 }}
                    width="560"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${video.replace(
                      'https://youtu.be/',
                      ''
                    )}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Card>
              )
            }

            return <div></div>
          })}
          {distro.screenShots.map((screenshot) => (
            <Card
              key={screenshot}
              type={'filled'}
              style={{ height: 315, maxWidth: 560, boxSizing: 'border-box' }}
            >
              <img
                src={screenshot}
                style={{
                  height: 'calc(100% + 32px)',
                  marginBottom: -16,
                  display: 'block',
                }}
              />
            </Card>
          ))}
        </CardGrid>
      </div>

      <article dangerouslySetInnerHTML={{ __html: distro.longDescription }} />

      <h2>Specs</h2>
      <CardGrid justify="flex-start">
        <Card
          type="filled"
          title={distro.desktopEnvironment}
          subtitle="Desktop Environment"
        />
        <Card type={'filled'} title={distro.toolkit} subtitle="Toolkit" />
        <Card
          type="filled"
          title={distro.lookAndFeel}
          subtitle="Look and feel"
        />
        <Card
          type="filled"
          title={distro.customisability}
          subtitle="Customisability"
        />
        {distro.preferredAppCatagories.map((category) => (
          <Card
            type="filled"
            title={category}
            subtitle="Good for"
            key={category}
          />
        ))}
      </CardGrid>

      <p>Data contributed by: {distro.dataContributors}.</p>

      {distro.customisability === Customisability.partialIntermediate && (
        <p>
          GTK 4 appears to have introduced a bug that leads to themes not being
          applied. All distros that are marked as using GTK will receive the tag
          `Broken theming` until this issue is fixed, even if they do not use
          gtk 4
        </p>
      )}
    </main>
  )
}

export default DistroAboutPage

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticProps(distroID: { params: { id: string } }) {
  const distro: Distro =
    distros.find((distro) => distro.id === distroID.params.id) || distros[0]

  const markdown = await readFile(
    join(process.cwd(), distro.longDescriptionPath),
    'utf-8'
  )
  const content = await markdownToHtml(markdown)

  return {
    props: {
      distro: {
        ...distro,
        longDescription: content,
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: distros.map((distro) => ({ params: { id: distro.id } })),
    fallback: false,
  }
}
