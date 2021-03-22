import { AppProps } from 'next/app'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import '../styles.css'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

const progress = new ProgressBar({
  size: 2,
  color: '#2563eb',
  className: 'bar-of-progress',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function MyApp({ Component, pageProps }: AppProps): EmotionJSX.Element {
  return <Component {...pageProps} />
}
