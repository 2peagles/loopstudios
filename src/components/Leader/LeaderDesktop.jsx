import React from 'react'
import { Container } from '../../styles/Hero'
import { LeaderContainer, LeaderTextContainer } from '../../styles/Leader'

export const LeaderDesktop = () => {
  return (
    <LeaderContainer className='centercontainer'>
        {/* <Container className='centercontainer'> */}
            <img src="/images/desktop/image-interactive.jpg" alt="LEADER WITH VR" />
            <LeaderTextContainer>
              <h2 >the leader in interactive vr</h2>
                <p> Founded in 2011, Loopstudios has been producing world-class virtual reality projects 
                        for some of the best companies around the globe. Our award-winning creations have transformed 
                        businesses through digital experiences that bind to their brand.
                </p>
            </LeaderTextContainer>
        {/* </Container> */}
    </LeaderContainer>
  )
}
