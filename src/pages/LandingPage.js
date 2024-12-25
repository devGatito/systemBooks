import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate ();

    useEffect (() => {
        const timer = setTimeout(() => {
            navigate("/main"); 
        }, 5000);

            return () => clearTimeout(timer);
    }, [navigate]);

    return <div>Bienvenido a la tienda de libros. Redirigiendo...</div>     
    
}
export default LandingPage;