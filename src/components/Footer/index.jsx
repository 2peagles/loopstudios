import { Box, Container, Stack, styled} from '@mui/system'
import React from 'react'
import { Color } from '../../styles/theme'
import { Navigation } from '../Hero/Navigation'
import { List, ListItem, Typography } from '@mui/material'

const FooterSection= styled(Box)(()=>({
  backgroundColor:Color.black,
  minHeight:'10vh',
  color:Color.white,
  marginTop:'7em'
}))
export const Footer = () => {
  return (
    <FooterSection>
      <Container disableGutters>
        <Box padding='1.5rem 0'>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          className='spacebetween'>

            <Stack>
            <List>
                <ListItem><img src='/images/logo.svg' alt='loopstudio icon' className='hover'/></ListItem>
            </List>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                className='footerdesktop footermobile'
              >
                {Navigation.map((item, index) => {
                  return (
                    <ListItem key={index} item={item.title} sx={{ textTransform: 'capitalize', width:'fit-content', padding:' 0 0 1rem', margin:'0.5rem'}} className='hover'> {item.title}</ListItem>
                  )
                })}
              </Stack>
            </Stack>

          <Stack  >
              <Stack direction='row'   className='footermobile footerdesktop'>
                <ListItem sx={{ width: 'fit-content', padding: ' 0 0 1rem', margin: '0.5rem'}} ><img src='/images/icon-facebook.svg' alt='follows us on facebook' className='hover centercontainer' /> </ListItem>
                <ListItem sx={{ width:'fit-content',padding: ' 0 0 1rem', margin: '0.5rem' }} ><img src='/images/icon-twitter.svg' alt='follows us on twitter' className='hover centercontainer' /> </ListItem>
                <ListItem sx={{ width: 'fit-content', padding: ' 0 0 1rem', margin: '0.5rem' }} ><img src='/images/icon-pinterest.svg' alt='follows us on pinterest' className='hover centercontainer'/> </ListItem>
                <ListItem sx={{ width: 'fit-content', padding: ' 0 0 1rem', margin: '0.5rem' }} ><img src='/images/icon-instagram.svg' alt='follows us on instagram' className='hover centercontainer' /> </ListItem> 
              </Stack>
              <List>
                <ListItem sx={{ padding: '0', color:'#696363'}}><Typography variant='p'>@ 2021 Loopstudios. All rights reserved</Typography></ListItem>
              </List>
            </Stack>
          </Stack>
        </Box>
      </Container>
   </FooterSection>
  )
}
