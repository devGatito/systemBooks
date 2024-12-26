import React from 'react';
import { useCart } from '../context/CartContext'; // Importar el contexto del carrito
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart(); // Usar el contexto
  const navigate = useNavigate();

  // Función para manejar la compra
  const handleBuy = () => {
    clearCart(); // Limpiar el carrito después de la compra
    alert('¡Gracias por su compra!');
    navigate('/main'); // Redirigir a la página principal
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay libros en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                <div>
                  <img src={book.cover} alt={book.title} className="book-cover" />
                  <p><strong>Nombre:</strong> {book.title}</p>
                  <p><strong>Autor:</strong> {book.author}</p>
                  <p><strong>Precio:</strong> ${book.price}</p>
                  <button onClick={() => removeFromCart(book.id)}>Eliminar</button> {/* Llamada a removeFromCart */}
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice}</h2>
          <button onClick={handleBuy}>Comprar</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;

