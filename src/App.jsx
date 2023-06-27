import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import './App.css';
import Home from './Pages/Home';
import Company from './Pages/Company';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='/company' element={<Company />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;