import React from 'react'
import css from './base.module.css'
import './Page5.css'
import circle from './resources/circle.svg'

function Page5() {
  return (
    <div className={css.page2} >
      <div className='circle'>
                <div className='element'>
                    <img src={circle} className="img"></img>
                    Years
                    <div className='overwrite' >03+</div>
                </div>
                
                <div className='element'>
                    <img src={circle} className="img"></img>
                    Events
                    <div className='overwrite'>10+</div>
                </div>

                <div className='element'>
                    <img src={circle} className="img"></img>
                    Members
                    <div className='overwrite'>1K+</div>
                </div>
                
                <div className='element'>
                    <img src={circle} className="img"></img>
                    Attendees
                    <div className='overwrite'>200+</div>
                </div>
        
        

      </div>
    </div>
  )
}

export default Page5
