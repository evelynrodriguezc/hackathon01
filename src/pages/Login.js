import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [adminLogin, setAdminLogin] = useState({ username: "", password: "" });
  const [userError, setUserError] = useState("");
  const [adminError, setAdminError] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false); // Controla qué formulario se muestra
  const navigate = useNavigate();

  // Función para alternar entre los formularios
  const toggleLogin = () => {
    setShowAdminLogin((prev) => !prev);
    setUserError("");
    setAdminError("");
  };

  // Función para manejar el login de usuarios
  const handleUserLogin = (e) => {
    e.preventDefault();
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = usuariosGuardados.find(
      (u) => u.usuario === userLogin.username && u.contrasena === userLogin.password
    );

    if (usuarioExistente) {
      navigate("/reservar");
    } else {
      setUserError("Usuario o contraseña incorrecta.");
    }
  };

  // Función para manejar el login de administrador
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const { username, password } = adminLogin;
    if (username === "adminNido" && password === "admin123") {
      navigate("/admin");
    } else {
      setAdminError("Usuario o contraseña incorrecta.");
    }
  };

  return (
    <div className="login-container">
      {/* Login de Usuarios */}
      {!showAdminLogin && (
        <div className="login-form-wrapper">
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
            <button
              type="button"
              onClick={toggleLogin}
              className="toggle-login-button"
            >
              <FaLock /> Modo Administrador
            </button>
            <div className="registrarse">
              <p>
                ¿No tienes cuenta? <a href="/registro">Registrarse</a>
              </p>
            </div>
            {userError && <p style={{ color: "red", marginTop: "10px" }}>{userError}</p>}
          </form>
        </div>
      )}

      {/* Login de Administrador */}
      {showAdminLogin && (
        <div className="login-form-wrapper">
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
            <button
              type="button"
              onClick={toggleLogin}
              className="toggle-login-button"
            >
              <FaUserAlt /> Modo Usuario
            </button>
            {adminError && <p style={{ color: "red", marginTop: "10px" }}>{adminError}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
