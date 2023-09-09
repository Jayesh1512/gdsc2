import React from 'react'
import css from './base.module.css'
import photo1 from './resources/photo1.svg'
import arrow1 from './resources/arrow1.png'
import arrow2 from './resources/arrow2.png'
import arrow3 from './resources/arrow3.png'


import './Page1.css'
function Page1() {
  return (
    <div className={css.page1}>
      
      
      
      <div className='page2-image'>
        <img src={photo1}></img>
      </div>


      <div className='page2-text'>
      Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
      </div>
     
     
      <div className='page2-button'>
        <div className='page2-button-act'><a href='https://youtu.be/dQw4w9WgXcQ?si=vnYTPsmurmssG_Xx'>JOIN US</a></div>
      </div>

      <div className='arrowss'>
        <img src={arrow1}className='arrow'></img>
        <img src={arrow2}className='arrow'></img>
        <img src={arrow3}className='arrow'></img>
      </div>


    </div>
  )
}

export default Page1
