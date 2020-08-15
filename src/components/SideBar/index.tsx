import React from 'react'

import { FiBarChart2 } from 'react-icons/fi'
import { Container, InvestedButton } from './styles'
import SideBarItems from './SideBarItems'
import SideBarDropdown from './SideBarDropdown'
import SideBarBalance from './SideBarBalance'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SideBarBalance />
      <InvestedButton>
        Ver Total Investido
        <FiBarChart2 size="1.6rem" />
      </InvestedButton>
      {Object.entries(SideBarItems).map(([key, value]) => (
        <SideBarDropdown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  )
}

export default SideBar
