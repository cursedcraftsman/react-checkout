import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const stripePromise = loadStripe('your-public-key');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Card information</label>
        <CardElement />
      </div>
      <div className="form-group">
        <label>Name on card</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Country or region</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          <option value="United States">United States</option>
          <option value="India">India</option>
          
        </select>
      </div>
      <div className="form-group">
        <label>ZIP</label>
        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
      </div>
      <button type="submit" disabled={!stripe}>
        Subscribe
      </button>
    </form>
  );
};

const Wrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Wrapper;