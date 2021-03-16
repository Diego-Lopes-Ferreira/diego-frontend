// eslint-disable-next-line no-use-before-define
import React from 'react'

//* Images
import { Container, Quantity, Bar } from '../styles/Components/Skill'

type SkillProps = {
  name: string
  percentage: number
}

const Home: React.FC<SkillProps> = ({ name, percentage }) => {
  return (
    <Container>
      <p>{name}</p>
      <div className="a">
        <Bar>
          <Quantity style={{ width: percentage + '%' }} />
        </Bar>
      </div>
    </Container>
  )
}

export default Home
