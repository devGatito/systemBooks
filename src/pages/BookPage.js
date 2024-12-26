import React, { useState, useEffect, memo } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 


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

const BookPage = memo(() => {
  const { id } = useParams(); // Obtener el id del libro de la URL
  const [book, setBook] = useState(null); // Estado para el libro seleccionado
  const [message, setMessage] = useState(''); // Mensaje de agradecimiento
  const { addToCart } = useCart(); // Accede al carrito
  const navigate = useNavigate(); // Para navegar después de la compra

  // Validación del id para evitar errores si el id no es válido
  useEffect(() => {
    const selectedBook = books.find((book) => book.id === parseInt(id)); // Buscar el libro por id
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      // Redirigir a la página principal si el libro no existe
      navigate('/main');
    }
  }, [id, navigate]);

  // Función para manejar la compra
  const handleBuy = () => {
    addToCart(book); // Agregar al carrito
    setMessage('¡Gracias por su compra!'); // Mensaje de compra exitosa
    setTimeout(() => {
      navigate('/main'); // Redirigir a la página principal
    }, 3000);
  };

  // Validar si el libro está cargado
  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} className="book-cover" />
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Precio:</strong> ${book.price}</p>
      <button onClick={handleBuy}>Comprar</button>
      {message && <p>{message}</p>} {/* Mostrar mensaje de compra */}
    </div>
  );
});

export default BookPage;
