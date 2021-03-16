// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

// * Images
import { Container } from '../styles/pages'

// * Components
import Skill from '../Components/Skill'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Diego | About?</title>
      </Head>
      <Container>
        <h1>Oi, eu sou o Diego</h1>
        <Skill name="Empatia" percentage={90} />
        <Skill name="Foco" percentage={60} />
      </Container>
    </div>
  )
}

export default Home
