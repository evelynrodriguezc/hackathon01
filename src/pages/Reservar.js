import React, { useState, useEffect } from "react";

const Reservar = () => {
  const [estadoHabitaciones, setEstadoHabitaciones] = useState({
    cardHabitacion1: "disponible",
    cardHabitacion2: "disponible",
    cardHabitacion3: "disponible",
    cardHabitacion4: "disponible",
    cardHabitacion5: "disponible",
  });
  const [mensaje, setMensaje] = useState(""); // Nuevo estado para el mensaje
  const [reservasExistentes, setReservasExistentes] = useState([]); // Estado para las reservas

  useEffect(() => {
    const habitaciones = ["cardHabitacion1", "cardHabitacion2", "cardHabitacion3", "cardHabitacion4", "cardHabitacion5"];
    const estadoGuardado = {};
    habitaciones.forEach((habitacion) => {
      const estado = localStorage.getItem(habitacion) || "disponible";
      estadoGuardado[habitacion] = estado;
    });
    setEstadoHabitaciones(estadoGuardado);

    // Obtener las reservas de localStorage
    const reservas = [];
    habitaciones.forEach((habitacion) => {
      const reserva = JSON.parse(localStorage.getItem(habitacion));
      if (reserva) {
        reservas.push({ ...reserva, habitacion });
      }
    });
    setReservasExistentes(reservas);
  }, []);

  const mostrarFormularioReserva = (cardId) => {
    setEstadoHabitaciones((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === "disponible" ? "reservando" : "disponible",
    }));
  };

  const confirmarReserva = (event, cardId) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserva = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      documento: formData.get("documento"),
      fechaHoraEntrada: formData.get("fechaHoraEntrada"),
      fechaHoraSalida: formData.get("fechaHoraSalida"),
    };

    // Verificar que no haya una reserva en el mismo horario
    const horaEntrada = reserva.fechaHoraEntrada;
    const conflicto = reservasExistentes.some(
      (reservaExistente) =>
        reservaExistente.habitacion === cardId &&
        (horaEntrada >= reservaExistente.fechaHoraEntrada && horaEntrada <= reservaExistente.fechaHoraSalida)
    );

    if (conflicto) {
      alert("La habitación ya está reservada para esa fecha y hora.");
      return;
    }

    localStorage.setItem(cardId, JSON.stringify(reserva));
    setEstadoHabitaciones((prev) => ({
      ...prev,
      [cardId]: "reservada",
    }));

    // Agregar la nueva reserva a las reservas existentes
    setReservasExistentes((prev) => [...prev, { ...reserva, habitacion: cardId }]);

    // Mostrar mensaje de "Reserva enviada"
    setMensaje("Reserva enviada");
    setTimeout(() => setMensaje(""), 5000); // El mensaje desaparece después de 5 segundos
  };

  const renderFormulario = (cardId) => {
    return (
      <div
        className="formularioReserva mt-3"
        style={{
          display: estadoHabitaciones[cardId] === "reservando" ? "block" : "none",
        }}
      >
        <form onSubmit={(e) => confirmarReserva(e, cardId)}>
          <label htmlFor="nombre">Nombres:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required
          />

          <label htmlFor="apellido">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            required
          />

          <label htmlFor="documento">Documento:</label>
          <input
            type="text"
            className="form-control"
            id="documento"
            name="documento"
            required
          />

          <label htmlFor="fechaHoraEntrada">Fecha y Hora de Ingreso:</label>
          <input
            type="datetime-local"
            className="form-control"
            id="fechaHoraEntrada"
            name="fechaHoraEntrada"
            required
          />

          <label htmlFor="fechaHoraSalida">Fecha y Hora de Salida:</label>
          <input
            type="datetime-local"
            className="form-control"
            id="fechaHoraSalida"
            name="fechaHoraSalida"
            required
          />

          <button type="submit" className="btn btn-primary mt-2">
            Confirmar Reserva
          </button>
        </form>
        {mensaje && <div className="alert alert-success mt-2">{mensaje}</div>}
      </div>
    );
  };

  const habitaciones = [
    {
      id: "cardHabitacion1",
      titulo: "Sala Space",
      descripcion:
      <ul>
        <li>Sala funcional para trabajo colaborativo</li>
        <li>Mesa de madera y sillas ergonómicas</li>
        <li>Iluminación natural con ventanales amplios</li>
        <li>Ideal para reuniones sin tecnología o discusiones</li>
      </ul>,
      capacidad: "7-10 personas",
      imagen: "images/space.png",
    },
    {
      id: "cardHabitacion2",
      titulo: "Sala Focus",
      descripcion:
      <ul>
        <li>Espacio diseñado para la concentración y el brainstorming.</li>
        <li>Equipada con un video beam y una pizarra blanca de gran tamaño para anotar ideas.</li>
        <li>Paredes con paneles insonorizados para reducir el ruido externo.</li>
        <li>Iluminación ajustable para mayor comodidad.</li>
        <li>Asientos modulares que permiten configuraciones flexibles según las necesidades del grupo.</li>
      </ul>,
      capacidad: "5-8 personas",
      imagen: "images/focus.png",
    },
    {
      id: "cardHabitacion3",
      titulo: "Sala Horizon",
      descripcion:
      <ul>
        <li>Diseñada para concentración y brainstorming.</li>
        <li>Incluye video beam y pizarra blanca grande.</li>
        <li>Paredes insonorizadas para reducir ruido.</li>
        <li>Iluminación ajustable para comodidad.</li>
        <li>Asientos modulares y configurables.</li>
      </ul>,
      capacidad: "12-15 personas",
      imagen: "images/horizon.png",
    },
    {
      id: "cardHabitacion4",
      titulo: "Sala Nexus",
      descripcion:
      <ul>
        <li>Para concentración y brainstorming.</li>
        <li>Con video beam y pizarra grande.</li>
        <li>Paredes insonorizadas.</li>
        <li>Iluminación ajustable.</li>
        <li>Asientos modulares.</li>
      </ul>,
      capacidad: "8-12 personas",
      imagen: "images/nexxus.png",
    },
    {
      id: "cardHabitacion5",
      titulo: "Sala Innovate",
      descripcion:
      <ul>
        <li>Sala premium para reuniones o talleres.</li>
        <li>Mesa ovalada moderna.</li>
        <li>Televisor 4K de 75 pulgadas.</li>
        <li>Sistema de videoconferencia avanzado.</li>
        <li>Estaciones de carga y cafetera integrada.</li>
        <li>Decoración con tonos cálidos y profesional.</li>
      </ul>,
      capacidad: "10-20 personas",
      imagen: "images/innovate.png",
    },
  ];

  return (
    <div>
      <div className="zonaReserva">
        <h1>Zona De Reserva</h1>
      </div>

      <main>
        {habitaciones.map((habitacion) => (
          <div className="card mb-3" key={habitacion.id} id={habitacion.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={habitacion.imagen} className="img-fluid rounded-start" alt={habitacion.titulo} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{habitacion.titulo}</h5>
                  <p className="card-text">{habitacion.descripcion}</p>
                  <p className="card-text">
                    <small className="text-muted">{habitacion.capacidad}</small>
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => mostrarFormularioReserva(habitacion.id)}
                    disabled={estadoHabitaciones[habitacion.id] === "reservada"}
                  >
                    {estadoHabitaciones[habitacion.id] === "reservada" ? "Reservada" : "Reservar"}
                  </button>
                  {renderFormulario(habitacion.id)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Reservar;
