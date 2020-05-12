import React from 'react';
import './homeInfo.css'

const HomeInfo = () => {
  return (
    <div className='home-info bg-dark'>
      <div className='info-img'></div>
      <div className='info-content'>
        <h2>
          <span className='text-primary'>The History </span>Of Our Hotel
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          impedit consequuntur ratione a explicabo debitis tenetur fuga qui
          quaerat repellat.
        </p>
        <a href="About.jsx" className="btn btn-light">Read More</a>
      </div>
    </div>
  );
};

export default HomeInfo;
