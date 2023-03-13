import '@/styles/globals.css'
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Footer from "@/pages/share/footer";
import Header from "@/pages/share/header";
import Router from 'next/router';
// @ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress
import { checkAuthLogin } from './helper';
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({Component, pageProps}: AppProps) {

    return (
        <>
            <Head>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                <link rel="icon"
                      href="/favicon.ico"/>
            </Head>

            <Header/>

            <div className={`my-2`}>
                <Component {...pageProps} />
            </div>

            <Footer/>
        </>
    )

}
