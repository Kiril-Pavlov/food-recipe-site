import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import carousel1 from "../../assets/home-hero-carousel-1.jfif"
import carousel2 from "../../assets/home-hero-carousel-2.jfif"
import carousel3 from "../../assets/home-hero-carousel-3.jfif"
import carousel4 from "../../assets/home-hero-carousel-4.jfif"


const HeroCarousel = () => {
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

const items = [
  <img src={carousel1} onDragStart={handleDragStart} role="presentation" />,
  <img src={carousel2} onDragStart={handleDragStart} role="presentation" />,
  <img src={carousel3} onDragStart={handleDragStart} role="presentation" />,
  <img src={carousel4} onDragStart={handleDragStart} role="presentation" />,
];
  return (
    <div>
        <AliceCarousel mouseTracking items={items} responsive={responsive} infinite/>
    </div>
  )
}

export default HeroCarousel