import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1); // Estado para la opacidad del navbar

  useEffect(() => {
    // Función para manejar el scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Obtiene la posición de desplazamiento
      const opacityValue = 1 - scrollPosition / 300; // Calcula la opacidad en función del scroll
      setOpacity(opacityValue < 0.2 ? 0.2 : opacityValue); // Limita la opacidad a 0.2 como mínimo
    };

    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        opacity: opacity,
        transition: "opacity 0.3s ease-in-out",
        backgroundColor: "#000000", // Fondo negro
      }}
    >
      <div className="container-fluid">
        <img
          src="images/nidologo1.png"
          style={{ 
            width: "100%", 
            maxWidth: "80px",
            marginLeft: "20px"
          }}
          className="navbar-brand"
          alt="Logo de Hotel Terra Nova"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link className="nav-link active" to="/inicio">
                Inicio
              </Link>
            </li>
            
            <li className="nav-item">
              <a href="#conocenos" className="nav-link">
                Conócenos
              </a>
            </li>
            
          </ul>
          {/* Botón de Login */}
          <div className="d-flex justify-content-start">
            <Link
              to="/Login"
              className="btn btn-light text-dark"
              style={{
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "8px 16px",
                marginRight: "20px"
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
