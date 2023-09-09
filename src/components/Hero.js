import React, { useEffect, useState } from 'react'
import css from './base.module.css'
import gdsc1 from './resources/Google.png'
import logo from './resources/logo.png';
import sun from './resources/sunny.png';
import moon from './resources/mooon.png';
import dark from './resources/gdsclogodark.png'
import './Hero.css'



function Hero() {

  const toggleTheme = () =>{
    if(theme === "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }

  }
  const [theme , setTheme] = useState("light-theme")

  useEffect(() => {
    document.body.className = theme;
  } , [theme]);

  
  return (
    <div className={css.hero}>
      <div className='navigation'>
        <div className='left'>
        <img src = {logo}></img>
        <div className='text gdsctext'>GDSC RCOEM</div>
        </div>
            <div className='links'>
            <div className='linktext'>Home</div>
            <div className='linktext'>Events</div>
            <div className='linktext'>Team</div>
            <div className='linktext'>Alumni</div>
            <div className='linktext'>Contact</div>
            <div className='button'>
            <img src={sun}></img>
              <input type="checkbox" id="switch" onChange={toggleTheme}/>
              <label for="switch">Toggle</label>
             <img src={moon}></img>
            </div>
        </div>
     </div>


    <div className='hero-image'>
        <img src={theme === 'light-theme' ? gdsc1 :dark }></img>
    </div>


    </div>
  )
}

export default Hero
