import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleConfirm = () => {
    alert('¡Pedido realizado con éxito!');
    clearCart();
    navigate('/main');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Resumen de la compra
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">No tienes libros en el carrito.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((book) => (
                <li
                  key={book.id}
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {book.title}
                    </p>
                    <p className="text-sm text-gray-500">${book.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 flex justify-between">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </h2>
            </div>
            <button
              onClick={handleConfirm}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition"
            >
              Confirmar compra
            </button>
          </>
        )}
      </div>
      <button
        onClick={() => navigate('/main')}
        className="mt-4 text-blue-500 hover:underline"
      >
        Volver a la tienda
      </button>
    </div>
  );
}

export default CheckoutPage;
