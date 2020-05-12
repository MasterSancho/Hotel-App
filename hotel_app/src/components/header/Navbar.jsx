import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo'>
          <a href='App.jsx'>HBT</a>
        </h1>
        <ul>
          <li>
            <a className='current' href='App.jsx'>
              Home
            </a>
          </li>
          <li>
            <a href='About.jsx'>About</a>
          </li>
          <li>
            <a href='Contact.jsx'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
