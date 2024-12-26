import React, { createContext, useContext, useState, useCallback } from 'react';

// Crear un contexto para el carrito
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext); // Hook para acceder al carrito
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // El estado del carrito

  // Función para agregar un libro al carrito
  const addToCart = useCallback((book) => {
    setCart((prevCart) => [...prevCart, book]); // Agregar libro al carrito
  }, []);

  // Función para eliminar un libro del carrito
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Eliminar el libro con el id específico
  }, []);

  // Función para vaciar el carrito
  const clearCart = useCallback(() => {
    setCart([]); // Vaciar el carrito
  }, []);

  // Número de libros en el carrito
  const cartCount = cart.length;

  // Calcular el precio total de la compra
  const totalPrice = React.useMemo(() => {
    return cart.reduce((total, book) => total + book.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, totalPrice }}>
      {children} {/* Proveer el valor del carrito al resto de los componentes */}
    </CartContext.Provider>
  );
}