import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {


  return (
    <div>
      <Header />
      <Hero/>          
      <Service/>
      <Project />
      <About />
      <CTA />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
