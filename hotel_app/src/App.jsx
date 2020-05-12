import React from 'react';
import Navbar from './components/header/navbar/Navbar';
import ShowCase from './components/header/showcase/ShowCase';
import HomeInfo from './components/section/home-info/HomeInfo';
import Features from './components/section/features/Features';
import AboutInfo from './components/about/about-info/AboutInfo';
import Testimonials from './components/about/testimonials/Testimonials';
import ContactUs from './components/contact/contact-us/ContactUs';
import ContactInfo from './components/contact/contact-info/ContactInfo';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ShowCase />
      <HomeInfo />
      <Features />
      <AboutInfo />
      <Testimonials />
      <ContactUs />
      <ContactInfo />
      <div className='clr'></div>
      <Footer />
    </div>
  );
}

export default App;
