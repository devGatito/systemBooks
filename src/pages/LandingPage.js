import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate ();

    useEffect (() => {
        const timer = setTimeout(() => {
            navigate("/main"); 
        }, 10000);

            return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="landing-container">
          <h1>Bienvenido a Relatos de Papel</h1>
          <p>Explora nuestra colección de libros y empieza a comprar ahora.</p>
          <p>Redirigiendo a la tienda en 5 segundos...</p>
        </div>
      );
    }
    
    export default LandingPage;