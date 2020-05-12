import React from 'react';

const ContactInfo = () => {
  return (
    <div className='contact-info bg-dark'>
      <div className='container'>
        <div className='box'>
          <i class='fas fa-hotel fa-3x'></i>
          <h3>Location</h3>
          <p>50 Main st, Boston MA</p>
        </div>
        <div className='box'>
          <i class='fas fa-phone fa-3x'></i>
          <h3>Phone Number</h3>
          <p>(+972) 555-5555-55</p>
        </div>
        <div className='box'>
          <i class='fas fa-envelope fa-3x'></i>
          <h3>Email Address</h3>
          <p>frontdesk@hotel.co</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
