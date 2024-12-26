import React from 'react';
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                Eliminar
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;