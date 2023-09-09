import React from 'react'
import css from './base.module.css'
import photo2 from './resources/Photo2.jpg'
import './Page2.css'



function Page2() {
  return (
    <div className={css.page2} >
    
    <div className='page2-head'>
       Get To Know Us! 
      </div>
    
      <div className='page2-subhead'>
        Our Mission
      </div>
      <hr className='page2-hr'></hr>
      

      <div className='mission'>
        <img src={photo2}></img>
        <div className='mission-text'>
          Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
        </div>
      </div>







    </div>
  )
}

export default Page2
