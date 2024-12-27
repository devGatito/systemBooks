import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

const books = [
  {
    "id": 1,
    "title": "El Amor en los Tiempos del Cólera",
    "author": "Gabriel Garcia Marquez",
    "price": 69000,
    "cover": '/images/el amor en tiempos de colera.jpg',
  },
];

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedBook = books.find((book) => book.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  const handleBuy = () => {
    addToCart(book);
    setIsModalOpen(true); // Mostrar modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate('/main'); // Redirigir después de cerrar el modal
    }, 300);
  };

  if (!book) return <p className="text-center mt-10">No existe el libro...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <img src={book.cover} alt={book.title} className="w-full h-auto rounded-lg mb-4" />
        <p className="text-gray-700"><strong>Autor:</strong> {book.author}</p>
        <p className="text-gray-700"><strong>Precio:</strong> ${book.price}</p>
        <button
          onClick={handleBuy}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Comprar
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm animate-modal-in">
            <h2 className="text-2xl font-bold mb-4">¡Gracias por su compra!</h2>
            <p className="text-gray-700 mb-4">El libro "{book.title}" ha sido añadido a su carrito.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookPage;
