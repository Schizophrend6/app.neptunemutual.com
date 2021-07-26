import Head from 'next/head'
import { NotFoundPage } from '../layouts/404'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404: Not Found - Neptune Mutual</title>
      </Head>
      <NotFoundPage />
    </>
  )
}

export default NotFound
