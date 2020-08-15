import React from 'react'

import { Container, Wrapper, LeftNav, Gradient, RightNav } from './styles'
import { BancoInter } from '../../assets'
import Button from '../Button'

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">PAI Investimentos</Button>
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  )
}

export default Header
