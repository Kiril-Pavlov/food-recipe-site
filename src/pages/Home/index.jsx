import React from 'react'
import "./Home.css"

import HeroCarousel from '../../components/Hero Carousel/HeroCarousel'
import TestCarousel from '../../components/Hero Carousel/TestCarousel'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <TestCarousel />
    </div>
  )
}

export default Home