import React from 'react';
import Navbar from './components/header/navbar/Navbar';
import ShowCase from './components/header/showcase/ShowCase';
import HomeInfo from './components/section/home-info/HomeInfo';
import Features from './components/section/features/Features';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ShowCase />
      <HomeInfo />
      <Features />
      <div className='clr'></div>
      <Footer />
    </div>
  );
}

export default App;
