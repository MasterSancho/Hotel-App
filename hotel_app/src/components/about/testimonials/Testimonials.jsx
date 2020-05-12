import React from 'react';
import Samantha from '../../../assets/img/person-1.jpg';
import Jen from '../../../assets/img/person-2.jpg';
import './testimonials.Style.css';

const Testimonials = () => {
  return (
    <div className='testimonials py-3'>
      <div className='container'>
        <h2 className='l-heading'>What Our Guests Say</h2>
        <div className='testimonial bg-primary'>
          <img src={Samantha} alt='Samantha' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque nulla tempore velit, aliquam, perspiciatis vitae dignissimos
            eos odio vel corporis debitis unde laboriosam, minima in itaque
            accusantium nesciunt neque sed veniam earum suscipit beatae.
          </p>
        </div>
        <div className='testimonial bg-primary'>
          <img src={Jen} alt='Jen' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque nulla tempore velit, aliquam, perspiciatis vitae dignissimos
            eos odio vel corporis debitis unde laboriosam, minima in itaque
            accusantium nesciunt neque sed veniam earum suscipit beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
