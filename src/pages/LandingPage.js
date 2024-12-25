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

    return <div>
                <h1>Bienvenido a Relatos de Papel. Cargando... </h1>
            </div>     
    
}
export default LandingPage;