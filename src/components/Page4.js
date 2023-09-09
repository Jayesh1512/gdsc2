import React from 'react'
import css from './base.module.css'
import photo2 from './resources/Photo4.png'
import './Page4.css'



function Page4() {
  return (
    <div className={css.page2} >
      <div className='page4-head'>
        
      </div>
      <div className='page4-subhead'>
      What Keeps Us Going?
      </div>
      <hr className='page4-hr'></hr>
      

      <div className='going'>
        <img src={photo2}></img>
        <div className='going-text'>
        Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.        </div>
      </div>

    </div>
  )
}

export default Page4
