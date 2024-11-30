import React, { useState, useEffect } from "react";

const Admin = () => {
  // Definir el estado para las reservas y el modal (si lo necesitas)
  const [reservas, setReservas] = useState([]); // Para manejar las reservas
  const [showModal, setShowModal] = useState(false); // Para mostrar u ocultar el modal si es necesario

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

  const handleReprogramar = (reserva) => {
    // Solicitar nueva fecha y hora de entrada y salida
    const nuevaFechaEntrada = prompt("Ingresa la nueva fecha y hora de entrada (DD-MM-YYYY):");
    const nuevaFechaSalida = prompt("Ingresa la nueva fecha y hora de salida (DD-MM-YYYY):");

    // Verificar que las fechas estén en el formato correcto (DD-MM-YYYY)
    const partesEntrada = nuevaFechaEntrada.split("-");
    const partesSalida = nuevaFechaSalida.split("-");

    if (partesEntrada.length === 3 && partesSalida.length === 3) {
      const [diaEntrada, mesEntrada, anioEntrada] = partesEntrada;
      const [diaSalida, mesSalida, anioSalida] = partesSalida;

      // Crear objetos de fecha para la entrada y salida
      const fechaEntrada = new Date(anioEntrada, mesEntrada - 1, diaEntrada);  // Mes es 0-indexado en JavaScript
      const fechaSalida = new Date(anioSalida, mesSalida - 1, diaSalida);

      // Verificar si ambas fechas son válidas
      if (!isNaN(fechaEntrada) && !isNaN(fechaSalida)) {
        // Convertir fechas a formato YYYY-MM-DD
        const nuevaFechaEntradaFormateada = fechaEntrada.toISOString().split('T')[0];
        const nuevaFechaSalidaFormateada = fechaSalida.toISOString().split('T')[0];

        // Crear reserva modificada
        const reservaModificada = {
          ...reserva,
          fechaHoraEntrada: nuevaFechaEntradaFormateada,
          fechaHoraSalida: nuevaFechaSalidaFormateada,
        };

        // Actualizar estado y localStorage
        setReservas((prev) =>
          prev.map((r) =>
            r.habitacion === reserva.habitacion ? { ...r, reserva: reservaModificada } : r
          )
        );
        localStorage.setItem(reserva.habitacion, JSON.stringify(reservaModificada));

        alert(`La reserva ha sido reprogramada para la habitación: ${reserva.habitacion}`);
        setShowModal(false); // Cerrar modal o ventana de reprogramación
      } else {
        alert("Una de las fechas ingresadas no es válida. Usa el formato DD-MM-YYYY.");
      }
    } else {
      alert("El formato de las fechas ingresadas no es válido. Usa DD-MM-YYYY.");
    }
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

export default Admin;
