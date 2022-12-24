import React, {useState} from 'react'
import { NavContainer, NavItems } from '../../styles/Hero'
import {Navigation} from './Navigation'
import { Stack,Box } from '@mui/system';

export const Nav = () => {
  const [menu, setMenu]=useState(false);
  const handleClick=()=>setMenu(!menu);

  return(
  <NavContainer className='row ' margin='0'>
    <Box width='100%' padding='0 ' margin='0' >
      <Stack direction='row' display='flex' alignItems='center' justifyContent='space-between'>
        <NavItems className='logomobile' ><img className='mobilemenu' src="/images/logo.svg" alt="LOGO (loopstudios)" /></NavItems>

          <Stack id='hiddennav' direction='row'>
            {Navigation.map((item, index) => {
              return (
                <Stack >
                  <NavItems key={index} item={item.title} sx={{}}> {item.title}</NavItems>
                </Stack>
              )
            })}
          </Stack>
        </Stack>

          {/* mobile */}

        <div onClick={handleClick} id='menu' className='navmobile'>
          {!menu ? <img src='/images/icon-hamburger.svg' alt='menu icon' /> : <img src='/images/icon-close.svg' alt='exit icon' />}
        </div>

        <div className={!menu ? 'hiddenmobilenav' : 'mobilenavcontainer'}>
        <Stack direction='column' id=''>
          {Navigation.map((item, index) => {
            return (
              // <Stack >
                <NavItems key={index} item={item.title} width='fit-content'> {item.title}</NavItems>
              // </Stack>
            )
          })}
        </Stack>
        </div>
    </Box>
  </NavContainer>
  )
}
