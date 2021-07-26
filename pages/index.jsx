import Head from 'next/head'
import { Home } from '../layouts/Home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - Neptune Mutual</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
