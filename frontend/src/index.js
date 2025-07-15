import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/Signup';
import About from './landing_page/about/AboutPage';
import Product from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/support' element={<Support />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <Footer />
  </Router>
);

