import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { Container } from './styles'
import Button from '../../Button'

const SideBarBalance: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Container>
      <div>
        <span>Saldo em Conta:</span>
        {isVisible ? (
          <>
            R$
            <strong>1.769.769,69</strong>
          </>
        ) : (
          <p />
        )}
      </div>
      <Button
        variant="transparent"
        onClick={() => setIsVisible(prevState => !prevState)}
      >
        {isVisible ? <FiEyeOff size="2rem" /> : <FiEye size="2rem" />}
      </Button>
    </Container>
  )
}

export default SideBarBalance
