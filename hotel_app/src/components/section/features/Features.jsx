import React from 'react';
import './features.css'

const Features = () => {
  return (
    <div className='features'>
      <div className='box bg-light'>
        <i class='fas fa-hotel fa-3x'></i>
        <h3>Great Location</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          repellendus?
        </p>
      </div>
      <div className='box bg-primary'>
        <i class='fas fa-utensils fa-3x'></i>
        <h3>Free Meals</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          repellendus?
        </p>
      </div>
      <div className='box bg-light'>
        <i class='fas fa-dumbbell fa-3x'></i>
        <h3>Fitness Room</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          repellendus?
        </p>
      </div>
    </div>
  );
};

export default Features;
