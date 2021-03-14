// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

//* Images
import SpacexLogo from '../assets/spacex.svg'
import { Container } from '../styles/pages'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Diego</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SpacexLogo />
        <h1>ReactJS template</h1>
        <p>
          A ReactJS + Next.js structure made by{' '}
          <a href="https://rocketseat.com.br">Rocketseat</a> - that I&apos;m
          copying :)
        </p>
      </Container>
    </div>
  )
}

export default Home
