import React from 'react'

import { FiChevronDown } from 'react-icons/fi'

import { Container } from './styles'
import { SideBarDropdownProps } from './types'

const SideBarDropdown: React.FC<SideBarDropdownProps> = ({
  icon,
  sectionName,
}) => {
  return (
    <Container>
      <div>{icon}</div>
      <span>{sectionName}</span>
      <div>
        <FiChevronDown />
      </div>
    </Container>
  )
}

export default SideBarDropdown
