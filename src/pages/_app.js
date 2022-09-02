import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className={'layout'}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  )
}

export default MyApp
