import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigateToBook = (id) => {
    navigate(`/book/${id}`);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tienda</h1>
        <button
          onClick={toggleCart}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
        >
          Mostrar Carrito
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Carrito</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            cerrar
          </button>
        </div>
        <ul className="p-4 space-y-4 overflow-y-auto">
          {cart.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex justify-between items-center"
            >
              <div
                onClick={() => handleNavigateToBook(item.id)}
                className="cursor-pointer"
              >
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.id);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`w-full mt-4 px-4 py-2  ${
            cart.length > 0
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Cart;
