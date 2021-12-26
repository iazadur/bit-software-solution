import '../styles/globals.css'
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from 'next/link';


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
      <header className="text-gray-100 body-font relative mb-4 h-16 bg-cyan-600">
        <div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center fixed top-0 right-0 left-0">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/" passHref>
              <span className=' font-bold ml-3 text-3xl cursor-pointer'>Shawarmer</span>
            </Link>

          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

            <Link href="/" passHref>
              <a className='mr-5 hover:text-gray-900 font-bold'>Home</a>
            </Link>
            <Link href="/" passHref>
              <a className='mr-5 hover:text-gray-900 font-bold'>Knowlage books</a>
            </Link>
            <Link href="/" passHref>
              <a className='mr-5 hover:text-gray-900 font-bold'>HR</a>
            </Link>
          </nav>
          <button className="flex gap-x-2">
            <Link href="/signin" passHref>
              <a className='text-blue-600  px-4 py-1 bg-sky-200 transition-all hover:text-white hover:bg-sky-500 rounded-md text-md font-bold'>Sign in</a>
            </Link>
            <Link href="/signup" passHref>
              <a className='text-blue-600  px-3 py-1 bg-sky-200 transition-all hover:text-white hover:bg-sky-500 rounded-md text-md font-bold'>Sign Up</a>
            </Link>


          </button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
