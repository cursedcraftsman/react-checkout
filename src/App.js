import React from 'react';
import Wrapper from './CheckoutForm';
import logo from './logo.webp';  
import productImage from './product.jpg';  
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />
        <img src={productImage} alt="Product" className="product-image" />
        <div className="footer">Powered by Stripe</div>
      </div>
      <div className="content">
        <header className="App-header">
          <h1>Herbivore</h1>
          <h2>Subscribe to Starter</h2>
          <p>$12.00 per month</p>
          <Wrapper />
        </header>
      </div>
    </div>
  );
};

export default App;
