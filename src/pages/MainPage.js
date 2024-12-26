import React, { useState, useMemo } from "react";
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
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, cartCount } = useCart(); // Obtener el número de libros en el carrito

  // Usamos useMemo para evitar recalcular el filtro en cada renderizado innecesario
  const filteredBooks = useMemo(() => {
    return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  return (
    <div>
      <h1>Tienda de Libros</h1>
      <SearchBar onSearch={setSearchTerm} />
      <h2>Libros disponibles</h2>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <p>{book.title} - ${book.price}</p>
            <Link to={`/book/${book.id}`}>Ver detalles</Link>
            <button onClick={() => addToCart(book)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button>
          Ver carrito ({cartCount} libro{cartCount !== 1 && 's'}) {/* Mostrar número de libros */}
        </button>
      </Link>
    </div>
  );
}

export default MainPage;