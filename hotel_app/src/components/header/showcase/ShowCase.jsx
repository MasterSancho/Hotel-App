import React from 'react';
import './showcase.css';

const ShowCase = () => {
  return (
    <div className='showcase'>
      <div className='container'>
        <div className='showcase-content'>
          <h1>
            <span className='text-primary'>Enjoy</span>Your Stay
          </h1>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            minima!
          </p>
          <a href='About.jsx' className='btn'>
            About Our Hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
