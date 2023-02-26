import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
