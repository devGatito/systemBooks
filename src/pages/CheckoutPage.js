import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

function CheckoutPage() {
  const { cart, clearCart } = useCart(); // Obtiene el carrito
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleConfirm = () => {
    alert('¡Pedido realizado con éxito!');
    clearCart(); // Vaciar el carrito después de la compra
    navigate('/main'); // Redirigir a la página principal
  };

  return (
    <div>
      <h1>Resumen de la compra</h1>
      {cart.length === 0 ? (
        <p>No tienes libros en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                {book.title} - ${book.price}
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice}</h2>
          <button onClick={handleConfirm}>Confirmar compra</button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
