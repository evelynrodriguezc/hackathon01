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
      <section 
  id="conocenos" 
  className="section-content section-separator" 
  style={{ padding: "50px 0", minHeight: "100vh", marginTop: "200px" }} // Ajusta el margen superior
>
  <div className="container">
    <h2 className="section-title" style={{ marginBottom: "30px" }}>¿Quiénes Somos?</h2>
    <p className="section-text" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
      Nos especializamos en ofrecer espacios de alta calidad para reuniones
      diseñados para satisfacer las necesidades de las empresas y organizaciones
      en busca de un ambiente profesional, elegante y cómodo para sus reuniones,
      conferencias y eventos exclusivos.
    </p>
  </div>
  <div className="row text-center mt-4">

  <div className="col-md-4">
    <img 
      src="images/calendario.png" 
      alt="Espacios" 
      style={{ width: "50px", height: "50px" }} // Adjust size of the PNG icon
    />
    <h5>Espacios</h5>
    <p>Diseñados para tu comodidad y profesionalismo.</p>
  </div>
  <div className="col-md-4">
    <img 
      src="images/socios.png" 
      alt="Servicios" 
      style={{ width: "50px", height: "50px" }} // Adjust size of the PNG icon
    />
    <h5>Servicios</h5>
    <p>Tecnología avanzada y atención personalizada.</p>
  </div>
  <div className="col-md-4">
    <img 
      src="images/ajuste.png" 
      alt="Atención" 
      style={{ width: "50px", height: "50px" }} // Adjust size of the PNG icon
    />
    <h5>Atención</h5>
    <p>Un equipo altamente capacitado a tu disposición.</p>
  </div>
</div>
</section>


      <section 
        id="ofrecemos" 
        className="section-content section-separator-small" // Clase con menos espacio
        style={{ padding: "10px 0", minHeight: "100vh" }}
      >
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "30px" }}>¿Qué Ofrecemos?</h2>
          <p className="section-text" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
            Contamos con un equipo altamente capacitado que se asegura de que cada detalle 
            esté cuidado, no solo ofrecemos un espacio físico, sino una experiencia integral
            que incluye tecnología de última generación, atención a la medida y un servicio 
            impecable. 
            Cada uno de nuestros espacios está diseñado para crear el ambiente perfecto que 
            impulse al éxito y la productividad de tu evento.
          </p>

          {/* Botón "Contactanos" */}
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
