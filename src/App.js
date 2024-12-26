import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

import './styles.css'; 



function App() {
  return (
    <CartProvider>
      <Router>
      <Cart /> {/* Carrito siempre visible */}      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
                   
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
