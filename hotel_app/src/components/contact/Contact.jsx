import React from 'react';
import './contact.Style.css';

const Contact = () => {
  return (
    <div className='contact-form py-3'>
      <div className='container'>
        <h1 className='l-heading'>
          <span className='text-primary'>Contact</span> Us
        </h1>
        <p>Please fill out the form below to contact us</p>
        <form action='process.php'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' className='message'></textarea>
          </div>
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
