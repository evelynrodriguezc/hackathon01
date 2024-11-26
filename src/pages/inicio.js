import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importar Link

const Inicio = () => {
  return (
    <div>
      {/* Contenedor de Bienvenida */}
      <div className="welcome-container">
        <h1 className="welcome-title">
        "Espacios a tu medida, soluciones para cada necesidad"
        </h1>
        <p className="welcome-subtitle">
          Desde reservas de salas hasta gestión eficiente, descubre cómo simplificamos tu trabajo diario.
        </p>
      </div>

      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className=" w-60 carousel-img"
              src="images/imagen1.png"
              alt="Primera imagen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-60 carousel-img"
              src="images/imagen2.png"
              alt="Segunda imagen"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sección "Conócenos" */}
      <section id="conocenos" className="section-content">
        <div className="container">
          <h2 className="section-title">¿Quiénes Somos?</h2>
          <p className="section-text">
            Nos especializamos en ofrecer espacios de alta calidad para reuniones
            diseñados para satisfacer las necesidades de las empresas y organizaciones
            en busca de un ambiente profesional, elegante y cómodo para sus reuniones,
            conferencias y eventos exclusivos.
          </p>

          <h2 className="section-title">¿Qué Ofrecemos?</h2>
          <p className="section-text">
            Contamos con un equipo altamente capacitado que se asegura de que cada detalle 
            este cuidado, no solo ofrecemos un espacio físico, sino una experiencia integral
            que incluye tecnología de ultimo generación, atención  a la medida y un servicio 
            impecable. 
            Cada uno de nuestros espacios están diseñados para crear el ambiente perfecto que 
            impulse al éxito y la productividad de tu evento.
          </p>

          {/* Botón "Más información" */}
          <div className="d-flex justify-content-center mt-4">
            <Link to="/contacto"> {/* Enlace al contacto */}
              <Button className="btn-waza">
                Contactanos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
