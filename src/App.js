// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Barra de navegación
import Footer from "./components/Footer";
import Reservar from "./pages/Reservar"; // Página de reservas
import Inicio from "./pages/inicio"; // Página de inicio
import Admin from "./pages/admin"; // Página de administración
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import Registro from "./pages/Registro";

function App() {
  return (
    <Router>
      <Navbar /> {/* Barra de navegación global */}
      <div className="container">
        <Routes>
          <Route path="/inicio" element={<Inicio />} /> {/* Página de inicio */}
          <Route path="/reservar" element={<Reservar />} /> {/* Página de reservas */}
          <Route path="/admin" element={<Admin />} /> {/* Página de administración */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
