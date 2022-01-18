import Link from 'next/link'
import './index.scss'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/distro'}>
          <a>Distros</a>
        </Link>
      </nav>
      <Component {...pageProps} />

      <footer>
        &copy; GPL v3 TrickyPR and other contributors 2022. This website and the
        data around it is free and open source.{' '}
        <a href="https://github.com/fushra/distros">Improve it on github</a>.
      </footer>
    </>
  )
}

export default MyApp
