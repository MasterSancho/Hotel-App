import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/header/navbar/Navbar';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
