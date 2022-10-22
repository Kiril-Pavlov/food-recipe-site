import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import "./TestCarousel.css"

// import carousel1 from "../../assets/home-hero-carousel-1.jfif"
// import carousel2 from "../../assets/home-hero-carousel-2.jfif"
// import carousel3 from "../../assets/home-hero-carousel-3.jfif"
// import carousel4 from "../../assets/home-hero-carousel-4.jfif"


const TestCarousel = () => {
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

const items = [
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>1
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>2
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>3
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>4
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>5
    </div>,
    <div onDragStart={handleDragStart} role="presentation" className='test-container'>6
    </div>,
  
];
  return (
    <div>
        <AliceCarousel mouseTracking items={items} responsive={responsive} infinite/>
    </div>
  )
}

export default TestCarousel