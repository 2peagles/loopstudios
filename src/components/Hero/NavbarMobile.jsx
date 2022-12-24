import React from 'react'
import { HeroContainerMobile, ContainerMobile, HeroTextContainerMobile } from '../../styles/Hero'
import { Nav } from './Nav'
import { Box } from '@mui/system'
export const NavbarMobile = () => {
  return (
    <HeroContainerMobile >
      <ContainerMobile>
        <Nav />
        <Box height='100%' display='flex' alignItems='center' justifyContent='center' >
            <HeroTextContainerMobile>
            <h1> immersive experiences that deliver</h1>
          </HeroTextContainerMobile>
        </Box>
      </ContainerMobile>
    </HeroContainerMobile>
  )
}
