import React from 'react'
// import { Container } from '../../styles/Hero'
import { Itemdata } from './Itemdata'
import { Button, Grid, Typography, Container, Box} from '@mui/material'
import { fontSize } from '@mui/system'
// import { TypographyGallery } from '../../styles/Leader'

export const GalleryMobile = () => {
    return (
        <section className='centercontainer gallery'>
            <Container maxWidth='sm'>
                <Box display='flex' alignContent='center' justifyContent='center' margin='1rem 0 2rem' fontSize='2.5rem'>
                    <h3>our creations</h3>
                </Box>

                {/* <Button variant="outlined" > see all</Button> */}
                <Grid container rowGap={2} display='flex' alignContent='center' justifyContent='center'>

                    {Itemdata.map((item ) => (
                        <Grid item key={item.imgmobile} md={1} sm={1}>
                            <img
                                src={`${item.imgmobile}?w=164&h=164&fit=crop&auto=format`} height='150px' width='340px'
                                // srcSet={`${item.imgmobile}?w=264&h=164&fit=crop&auto=format&dpr=2 5x`}
                                alt={item.title}
                                loading="lazy"
                            />       
                            <h3 className='fontfamily'>{item.title}</h3>  
                            {/* <TypographyGallery variant='h5' className='fontfamily'>{item.title}</TypographyGallery>   */}
                        </Grid>
                    ))}

                </Grid>
     
                <Box display='flex' alignContent='center' justifyContent='center' margin='2rem 0 4rem'>
                <Button variant="outlined" > see all</Button>
                </Box>
            </Container>
        </section>
    )
}
