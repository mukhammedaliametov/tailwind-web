import React from 'react';
import './App.css';
import Navbar from './Layouts/Navbar';
import Hero from './Pages/Hero';
import Analytics from './Pages/Analytics';
import { BrowserRouter } from 'react-router-dom';
import NewsLetter from './Pages/NewsLetter';
import Cards from './Pages/Cards';
import Footer from './Layouts/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </BrowserRouter>
  );
};

export default App;