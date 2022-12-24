import React from 'react'
import { ThemeProvider } from '@mui/system'
import theme from './styles/theme'
// import Button  from '@mui/material/Button'
import Hero from './components/Hero/Index'
import Leader from './components/Leader/index'
import Gallery from './components/Gallery/index'
import { Footer } from './components/Footer'
import { Container } from '@mui/material'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth='fluid'>
        <Hero />
          <Container disableGutters maxWidth="xl">
            <Leader />
          <Gallery />
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  
  )
}

export default App
