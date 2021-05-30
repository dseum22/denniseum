import '../styles/globals.css'
import '../styles/nprogress.css'
import Head from 'next/head'
import Router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/analytics'
import NProgress from 'nprogress'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialMenu from '../components/SocialMenu'

fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json())
  firebase.analytics()
}).catch(response => console.log(response))

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"></link>
        <title>Dennis Eum</title>
        <meta name="author" content="Dennis Eum"></meta>
        <meta name="description"
          content="Hey! My name is Dennis Eum, and I am a student based in Minnesota. I do full stack development and am also an avid cellist and debater."></meta>
        <meta name="keywords"
          content="dennis eum, dennis, eum, denniseum.com, dennis eum website, dennis eum personal website, dennis eum minnesota, dennis eum us, dennis eum home page, Dennis Eum, Dennis eum, dennis eum cello"></meta>
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="flex-grow mt-4 lg:mt-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <SocialMenu />
    </>
  )
}

export default MyApp
