import React from 'react'
import css from './base.module.css'
import './Page10.css'
import line from './resources/hr.png'
import android from './resources/Android.png'
import flutter from './resources/Flutter.png'
import cloud from './resources/Cloud.png'

function Page10() {
  return (
      <div className={css.page2}>
        <div className='hr'>
        <img src={line}></img>
        </div>
        <div className='page10-head'>
            Technologies
        </div>

        <div className='page10-subhead'>
        Domains That Excite Us to Collaborate and Teach!
        </div>
        <div className='tech'>
        <div className='box ' >
        <img src={android}></img>
        Android
        </div>
        <div className='box'>
        <img src={flutter} className='flutter'></img>
            Flutter
        </div>
        <div className='box'>
        <img src={cloud} className='flutter'></img>
            Cloud
        </div>
        </div>
      </div>
    
  )
}

export default Page10
