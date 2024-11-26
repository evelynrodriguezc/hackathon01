import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';  // Importamos iconos

const Footer = () => {
  return (
    <footer className="footer-custom text-white py-3 mt-5">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3">
            <img
              src="/images/nidologof.png"
              alt="Logo"
              className="footer-logo"
            />
            
          </Col>

          <Col md={4} className="text-center mb-3">
          <p className='enlaces-text'>Enlaces</p> 
            <div>
              <p><a href="/inicio" className="text-white no-underline">Inicio</a></p>
              <p><a href="/Login" className="text-white no-underline">Login</a></p>
              <p><a href="#conocenos" className="text-white no-underline">Conocenos</a></p>
            </div>
          </Col>

          <Col md={4} className="text-start mb-3">
            <p className='enlaces-text'>Contactos</p>
            <p className="contact-description">
              • Zonamérica, Cali, Valle del Cauca   <br />
              • OF:312 <br />
              • Cali: +57 3169820642 <br />
              • info@doru.com.co
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/doru.vets" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-white mx-2" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=573169820642&text=%C2%A1Hola+Doru%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} className="text-white mx-2" />
              </a>
              <a href="https://www.instagram.com/doru.vets/#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-white mx-2" />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-start py-2">
            <p className="mb-0" style={{ fontSize: '15px' }}>
              &copy; {new Date().getFullYear()} NIDO derechos reservados. Privacy | Terms of service
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
