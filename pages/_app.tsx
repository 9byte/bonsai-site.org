//import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'atropos/css'
import { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// workaround https://fontawesome.com/v6.0/docs/web/use-with/react/use-with#troubleshooting-with-next-js
// not working for yarn
config.autoAddCss = false

function BonsaiApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default BonsaiApp
