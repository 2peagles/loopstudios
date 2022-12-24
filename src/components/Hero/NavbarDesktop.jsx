import React from 'react'
import { HeroTextContainer, HeroContainer, Container} from '../../styles/Hero'
import { Nav } from './Nav'
import { Box } from '@mui/system'
export const NavbarDesktop = () => {
  return (
    <HeroContainer>
      <Container>
        <Nav/>
        <Box height='90%' display='flex' alignItems='center' justifyContent='left' >
          <HeroTextContainer>
            <h1> immersive experiences that deliver</h1>
          </HeroTextContainer>  
        </Box>
      </Container>
    </HeroContainer>
  )
}
