import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import '../index.css'
const books = [
  {
    "id": 1,
    "title": "El Amor en los Tiempos del Cólera",
    "author": "Gabriel Garcia Marquez",
    "price": 69000,
    "cover": '/images/el amor en tiempos de colera.jpg',
  },
  {
    "id": 2,
    "title": "Paraiso Travel",
    "author": "Jorge Franco",
    "price": 41400,
    "cover": '/images/paraiso travel.jpg',
  },
  
];

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto mt-8 px-4">
        <SearchBar onSearch={setSearchTerm} />
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Libros disponibles</h2>
        <div className="mt-6 max-h-[calc(5*12rem)] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={book.cover} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
                <p className="mt-2 text-green-600 font-bold">${(book.price / 100).toFixed(2)}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => addToCart(book)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Añadir al carrito
                  </button>
                  <Link
                    to={`/book/${book.id}`}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
