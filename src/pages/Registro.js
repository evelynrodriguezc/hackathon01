import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importamos el hook para redirigir

const Registro = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar si ya existe el usuario
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuariosGuardados.find(u => u.usuario === usuario);
    
    if (usuarioExistente) {
      setError('El usuario ya existe');
      return;
    }

    // Guardar el usuario y la contraseña en el localStorage
    const nuevoUsuario = { usuario, contrasena };
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    
    // Redirigir al panel de reservas
    navigate('/reservas');
  };

  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h1>Registro de Usuario</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
