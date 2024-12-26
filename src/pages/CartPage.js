import React, { useCallback } from 'react';
import { useCart } from '../context/CartContext'; // Usamos el contexto para acceder al carrito
import { useNavigate } from 'react-router-dom'; // Usar para redirigir después de la compra

const CartPage = React.memo(() => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart(); // Obtener el carrito, el precio total y las funciones del carrito
  const navigate = useNavigate(); // Usamos `useNavigate` para redirigir a la página principal después de la compra

  // Función para manejar el pago (vaciar el carrito y redirigir)
  const handlePay = useCallback(() => {
    clearCart(); // Vaciar el carrito
    alert('¡Gracias por su compra!'); // Mostrar mensaje de agradecimiento
    navigate('/main'); // Redirigir al usuario a la página principal (o una página de confirmación)
  }, [clearCart, navigate]);

  return (
    <div>
      <h1>Carrito de Compras</h1>

      {/* Si el carrito está vacío, mostramos un mensaje */}
      {cart.length === 0 ? (
        <p>El carrito está vacío. Agrega algunos libros para empezar.</p>
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
                  <button onClick={() => removeFromCart(book.id)}>Eliminar</button> {/* Eliminar libro del carrito */}
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice}</h2> {/* Muestra el precio total */}
          <button onClick={handlePay}>Pagar</button> {/* Botón para proceder con el pago */}
        </div>
      )}
    </div>
  );
});

export default CartPage;