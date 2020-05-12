import React from 'react';
import Navbar from './components/header/navbar/Navbar';
import ShowCase from './components/header/showcase/ShowCase';
import HomeInfo from './components/section/home-info/HomeInfo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ShowCase />
      <HomeInfo />
    </div>
  );
}

export default App;
