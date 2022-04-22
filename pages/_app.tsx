import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black font-mono text-white">
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  )
}

export default MyApp
