import '../styles/globals.css'
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from 'next/link';
import Header from '../Components/Header';
// import '../src/config/Firebase.config'
// import AuthProvider from '../src/Contexts/AuthProvider';



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const title = router.pathname.split('/')[1]
  return (
    <>
      <Head>
        <title>{title ? `${title.toLocaleUpperCase()} ~` : "HOME ~"}  IAZADUR </title>
        <meta name="description" content="THis is bebaha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header />
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider> */}
    </>
  )
}

export default MyApp
