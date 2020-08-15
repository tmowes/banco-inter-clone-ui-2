import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { Container, Card, Navigation } from './styles'
import Button from '../../Button'
import CardsItems from './CardsItems'

const CardsNavigation: React.FC = () => {
  return (
    <Container>
      <Navigation>
        {Object.entries(CardsItems).map(([key, value]) => (
          <Card key={`card-${key}`}>
            <div>{value.icon}</div>
            {key}
          </Card>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  )
}

export default CardsNavigation
