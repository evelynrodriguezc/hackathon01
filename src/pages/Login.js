import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [adminLogin, setAdminLogin] = useState({ username: "", password: "" });
  const [userError, setUserError] = useState("");
  const [adminError, setAdminError] = useState("");
  const navigate = useNavigate();

  // Función para manejar el login de usuarios
  const handleUserLogin = (e) => {
    e.preventDefault();

    // Obtener los usuarios guardados en el localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario y la contraseña coinciden con algún usuario registrado
    const usuarioExistente = usuariosGuardados.find(
      (u) => u.usuario === userLogin.username && u.contrasena === userLogin.password
    );

    if (usuarioExistente) {
      // Si el usuario y contraseña son correctos, redirigir a /reservas
      navigate("/reservar");
    } else {
      // Si no existe el usuario o la contraseña es incorrecta, mostrar un mensaje de error
      setUserError("Usuario o contraseña incorrecta.");
    }
  };

  // Función para manejar el login de administrador
  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Validación del administrador
    const { username, password } = adminLogin;
    if (username === "adminNido" && password === "admin123") {
      navigate("/admin"); // Redirige al panel de administración
    } else {
      setAdminError("Usuario o contraseña incorrecta.");
    }
  };

  return (
    <div className="login-container">
      {/* Login de Usuarios */}
      <div className="login-column">
        <form className="login-form" onSubmit={handleUserLogin}>
          <h1>Login Usuarios</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={userLogin.username}
              onChange={(e) =>
                setUserLogin({ ...userLogin, username: e.target.value })
              }
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
              required
            />
          </div>

          <button type="submit">Ingresar</button>
          <div className="registrarse">
            <p>
              ¿No tienes cuenta? <a href="/registro">Registrarse</a>
            </p>
          </div>
          {userError && <p style={{ color: "red", marginTop: "10px" }}>{userError}</p>}
        </form>
      </div>

      {/* Login de Administrador */}
      <div className="login-column">
        <form className="login-form" onSubmit={handleAdminLogin}>
          <h1>Login Administrador</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={adminLogin.username}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, username: e.target.value })
              }
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={adminLogin.password}
              onChange={(e) =>
                setAdminLogin({ ...adminLogin, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Ingresar</button>
          {adminError && (
            <p style={{ color: "red", marginTop: "10px" }}>{adminError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
