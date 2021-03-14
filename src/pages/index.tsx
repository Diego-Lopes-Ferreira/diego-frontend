// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

//* Images
import { Container } from '../styles/pages'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Diego</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>It'a me, Mario</h1>
        <p>
          Oi, eu sou o Diego
        </p>
      </Container>
    </div>
  )
}

export default Home
