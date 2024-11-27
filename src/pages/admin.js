import React, { useState, useEffect } from "react";


const Admin = () => {
  const [reservas, setReservas] = useState([]);

  // Cargar reservas desde localStorage
  useEffect(() => {
    const reservasGuardadas = [];
    for (let i = 1; i <= 5; i++) {
      const reserva = localStorage.getItem(`cardHabitacion${i}`);
      if (reserva) {
        reservasGuardadas.push({
          id: `cardHabitacion${i}`,
          reserva: JSON.parse(reserva),
          estado: "reservada",
        });
      }
    }
    setReservas(reservasGuardadas);
  }, []);

  const aceptarReserva = (id) => {
    setReservas((prev) =>
      prev.map((reserva) =>
        reserva.id === id ? { ...reserva, estado: "aceptada" } : reserva
      )
    );
    localStorage.setItem(
      id,
      JSON.stringify({ ...reservas.find((r) => r.id === id).reserva, estado: "aceptada" })
    );
  };

  const rechazarReserva = (id) => {
    localStorage.removeItem(id);
    setReservas((prev) => prev.filter((reserva) => reserva.id !== id));
    alert(`La reserva de ${id} ha sido rechazada y la sala está disponible nuevamente.`);
  };

  const reprogramarReserva = (id) => {
    const nuevaFecha = prompt("Ingresa la nueva fecha y hora (YYYY-MM-DDTHH:mm):");
    const reservaModificada = { ...reservas.find((r) => r.id === id).reserva, fechaHoraEntrada: nuevaFecha };
    setReservas((prev) =>
      prev.map((reserva) =>
        reserva.id === id ? { ...reserva, reserva: reservaModificada } : reserva
      )
    );
    localStorage.setItem(id, JSON.stringify(reservaModificada));
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
      </header>

      <main className="admin-content">
        {reservas.length > 0 ? (
          reservas.map((reserva) => (
            <div key={reserva.id} className="admin-card">
              <div className="admin-card-header">
                <h5>{reserva.id}</h5>
                <span className={`admin-status ${reserva.estado}`}>{reserva.estado}</span>
              </div>
              <div className="admin-card-body">
                <p><strong>Nombre:</strong> {reserva.reserva.nombre} {reserva.reserva.apellido}</p>
                <p><strong>Documento:</strong> {reserva.reserva.documento}</p>
                <p><strong>Fecha de Entrada:</strong> {reserva.reserva.fechaHoraEntrada}</p>
                <p><strong>Fecha de Salida:</strong> {reserva.reserva.fechaHoraSalida}</p>
              </div>
              <div className="admin-card-actions">
                <button
                  className="btn btn-success"
                  onClick={() => aceptarReserva(reserva.id)}
                  disabled={reserva.estado === "aceptada"}
                >
                  Aceptar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => rechazarReserva(reserva.id)}
                >
                  Rechazar
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => reprogramarReserva(reserva.id)}
                >
                  Reprogramar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reservas">No hay reservas para gestionar.</p>
        )}
      </main>
    </div>
  );
};

export default Admin