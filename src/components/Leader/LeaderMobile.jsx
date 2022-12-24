import React from 'react'
import { LeaderContainerMobile, LeaderTextContainerMobile } from '../../styles/Leader'
import { ContainerMobile } from '../../styles/Hero'

export const LeaderMobile = () => {
  return (
    <LeaderContainerMobile>
      <ContainerMobile className='col'>
        <img src="/images/mobile/image-interactive.jpg" alt="LEADER WITH VR" width='100%' />
        <LeaderTextContainerMobile>
          <h2 >the leader in interactive vr</h2>
          <p> Founded in 2011, Loopstudios has been producing world-class virtual reality projects
            for some of the best companies around the globe. Our award-winning creations have transformed
            businesses through digital experiences that bind to their brand.
          </p>
        </LeaderTextContainerMobile>
      </ContainerMobile>
    </LeaderContainerMobile>
  )
}
