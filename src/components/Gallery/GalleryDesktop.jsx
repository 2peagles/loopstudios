import React from 'react'
// import { Container } from '../../styles/Hero'
import { Itemdata } from './Itemdata'
import { Box, Button, Container, Grid } from '@mui/material'
export const GalleryDesktop = () => {
    return (
        <Container  className=' gallerycontainer'>
            {/* <Container> */}
                <Box className='row'  justifyContent='space-between' margin='2rem 0 5rem'>
                    <h3>our creations</h3>
                    <Button variant="outlined"> see all</Button>
                </Box>
            <Grid container rowGap={2} >
            
                    {Itemdata.map((item) => (
                        <Grid item key={item.img} xxl={3} lg={3} md={1} sm={1}>
                        {/* // <ImageListItem key={item.img}> */}
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`} height='550px' width='270px'
                                srcSet={`${item.img}?w=264&h=164&fit=crop&auto=format&dpr=2 5x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <h3 className='fontfamilydesktop'>{item.title}</h3> 
                        {/* </ImageListItem> */}
                        </Grid>
                    ))}
            
           </Grid>
                {/* <ImageList sx={{ width: 1300, height: 900 }} cols={4}  gap='2em' className='centercontainer'>
                    {Itemdata.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            {/* </Container> */}
        </Container>
    )
}
