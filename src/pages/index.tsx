// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

//* Images
import { Container } from '../styles/pages/standard'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Diego</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="asd">It&apos;a me, Mario</h1>
        <p>Oi, eu sou o Diego</p>
        <Link href="/test">
          <a className="button">Click me</a>
        </Link>
      </Container>
    </div>
  )
}

export default Home
