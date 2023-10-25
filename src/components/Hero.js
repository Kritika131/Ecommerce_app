import React from 'react'
import "../styles/Hero.css"
import hero_banner from "../Assets/images/hero_banner_img.jpg"


import Products from './Products'

const Hero = () => {
  return (
    
    <div className="hero">
        <img src={hero_banner} alt="" />
        <Products/>
    </div>
  )
}

export default Hero