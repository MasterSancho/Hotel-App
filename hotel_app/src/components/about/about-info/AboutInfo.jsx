import React from 'react';
import './aboutInfo.style.css';
import photo from '../../../assets/img/photo-2.jpg';

const AboutInfo = () => {
  return (
    <div className='about-info bg-light py-3'>
      <div className='container'>
        <div className='info-left'>
          <h1 className='l-heading'>
            <span className='text-primary'>About </span>Hotel
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            repellat dolor earum, itaque dicta delectus rerum dolore similique
            et sunt ab eius assumenda maiores labore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            minima placeat optio deserunt voluptatem, inventore corporis
            distinctio officia quos id.
          </p>
        </div>
        <div className='info-right'>
          <img src={photo} alt='hotel' />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
