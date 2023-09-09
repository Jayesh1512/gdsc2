import React from 'react'
import css from './base.module.css'
import './Page9.css'
import gdsc from './resources/gdsclogo.svg'
import location from './resources/location.png'
import mail from './resources/email.png'
import insta from './resources/instagram.png'
import twitter from './resources/twitter.png'
import linkedin from './resources/linkedin.png'


function Page9() {
  return (
    <div className={css.hero}>

    <div className='Title'>
        
    </div>   

    <div className='question-answer'>
      <div className='question'>
      How to reach us? </div>
      <div className='answer'>
      Mail us at "dsc.rknec@gmail.com "   
    </div> 
    </div>
    
    <div className='footer'>
    <div className='footer-main'>
        <div className='box1'>
        <img src={gdsc}></img>
        Google Student Developer Clubs<br></br>RCOEM
        </div>

        <div className='box2'>
          <div className='college'>
            <img src={location}></img>
            Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
            </div>
        
          <div className='email'>
            <img src={mail}></img>
          dsc.rknec@gmail.com</div>
        </div>

        <div className='box3'>
        Follow Us
        <div className='box3-images'>
        <img src={insta}></img>
        <img src={linkedin}></img>
        <img src={twitter}></img>
        </div>
        </div>

    </div>
    <hr className='rule'></hr>
    <div className='last' >
      Made With 🤍 by Jayesh
      
    </div>
    </div>      
    </div>
  )
}

export default Page9
