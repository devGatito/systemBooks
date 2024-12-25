import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';

const books = [
    {
        "id": 1,
        "name": "El Amor en los Tiempos del Cólera",
        "author":"Gabriel Garcia Marquez",
        "price": 69000,
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/96/2a/962a2176af9fc9b9c89b567f1f7548e8.jpg",
        
    },

    {
        "id": 2,
        "name": "Paraiso Travel",
        "author":"Jorge Franco",
        "price": 41400,
        "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/b3/e0/b3e02aaa4be213b7690cff7b7917c18c.jpg",
        
    },

    {
        "id": 3,
        "name": "Viaje al Final del Paraiso",
        "author":"Oscar Pinochet De La Barra",
        "price": 140000,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/87/e2/87e296100f2fc1d0a8b7ea0d415b4885.jpg",
        
    },

    {
        "id": 4,
        "name": "El Tunel",
        "author":"Ernesto Sabato",
        "price": 70000,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/1b/89/1b894384b151e0fb96bc2f4636a82fd4.jpg",
        
    },
    
    {
        "id": 5,
        "name": "Una Corte de Alas y Ruina",
        "author":"Sarah J. Maas",
        "price": 89100,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/4c/cb/4ccb9141593d19be41765429de111565.jpg",
        
    },

    {
        "id": 6,
        "name": "Julio En Su Salsa",
        "author":"Tulio Zuloaga",
        "price": 62100,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/af/de/afdecc4c56a417ba83ff0b2185212b58.jpg",
        
    },

    {
        "id": 7,
        "name": "A traves de ti",
        "author":"Ariana Godoy",
        "price": 55800,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/a3/8c/a38cebf9cc28e638c4db17106b67a756.jpg",
        
    }
];

function MainPage() {
    const [ searchTerm, setSearchTerm] = useState ('');
    const filteredBooks = books.filter((book) =>
        (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) || ''
      );
    
    return(
        <div>
        <h1>Tienda de Libros</h1>
        <SearchBar onSearch={setSearchTerm} />
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default MainPage;