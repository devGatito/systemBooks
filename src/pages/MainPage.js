import React, { useState } from "react";
import { useCart } from "../context/CartContext"; 
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';

const books = [
    {
        "id": 1,
        "title": "El Amor en los Tiempos del Cólera",
        "author":"Gabriel Garcia Marquez",
        "price": 69000,
        "cover": '/images/el amor en tiempos de colera.jpg',
        
    },

    {
        "id": 2,
        "title": "Paraiso Travel",
        "author":"Jorge Franco",
        "price": 41400,
        "cover": '/images/paraiso travel.jpg',
        
    },

    {
        "id": 3,
        "title": "Viaje al Final del Paraiso",
        "author":"Oscar Pinochet De La Barra",
        "price": 140000,
        "cover": '/images/viaje al final del paraiso.jpg',
        
    },

    {
        "id": 4,
        "title": "El Tunel",
        "author":"Ernesto Sabato",
        "price": 70000,
        "cover": '/images/el tunel.jpg',
        
    },
    
    {
        "id": 5,
        "title": "Una Corte de Alas y Ruina",
        "author":"Sarah J. Maas",
        "price": 89100,
        "cover": '/images/una corte de alas y ruina.jpg',
        
    },

    {
        "id": 6,
        "title": "Tulio En Su Salsa",
        "author":"Tulio Zuloaga",
        "price": 62100,
       "cover": '/images/tulio en su salsa.jpg',
        
    },

    {
        "id": 7,
        "title": "A traves de ti",
        "author":"Ariana Godoy",
        "price": 55800,
        "cover": '/images/a traves de ti.jpg',
      
    },
          
];

function MainPage() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda
  const { cart, addToCart } = useCart(); // Accede al carrito y a la función para agregar libros
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra los libros por título
  );

  return (
    <div className="main-container">
      <h1>Tienda de Libros</h1>
      <SearchBar onSearch={setSearchTerm} /> {/* Barra de búsqueda */}
      <h2>Libros disponibles</h2>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <p>{book.title} - ${book.price}</p>
            <button onClick={() => addToCart(book)} className="add-to-cart-btn">Agregar al carrito</button> {/* Agregar al carrito */}
          </div>
        ))}
      </div>

      <div>
        <h3>Carrito ({cart.length} libros)</h3>
        <ul>
          {cart.map((book) => (
            <li key={book.id}>
              {book.title} - ${book.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainPage;