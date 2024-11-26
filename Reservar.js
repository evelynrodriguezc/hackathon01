import React, { useState, useEffect } from "react";


const Reservar = () => {
  const [estadoHabitaciones, setEstadoHabitaciones] = useState({
    cardHabitacion1: "disponible",
    cardHabitacion2: "disponible",
    cardHabitacion3: "disponible",
    cardHabitacion4: "disponible",
    cardHabitacion5: "disponible",
  });

  useEffect(() => {
    const habitaciones = ["cardHabitacion1", "cardHabitacion2", "cardHabitacion3", "cardHabitacion4", "cardHabitacion5: "];
    const estadoGuardado = {};
    habitaciones.forEach((habitacion) => {
      const estado = localStorage.getItem(habitacion) || "disponible";
      estadoGuardado[habitacion] = estado;
    });
    setEstadoHabitaciones(estadoGuardado);
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
  
    localStorage.setItem(cardId, JSON.stringify(reserva));
    setEstadoHabitaciones((prev) => ({
      ...prev,
      [cardId]: "reservada",
    }));
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
      </div>
    );
  };
  

  const habitaciones = [
    {
      id: "cardHabitacion1",
      titulo: "Sala Space",
      descripcion:
        "Una sala sencilla y funcional, diseñada para fomentar el trabajo colaborativo. Cuenta con una mesa amplia de madera, cómodas sillas ergonómicas y una excelente iluminación natural gracias a sus ventanales de piso a techo. Ideal para reuniones sin tecnología o trabajos enfocados en papel o discusión.",
      capacidad: "7-10 personas",
      
      imagen: "images/space.png",
    },
    {
      id: "cardHabitacion2",
      titulo: "Sala Focus",
      descripcion:
        "Un espacio diseñado para la concentración y el brainstorming. Equipada con un video beam y una pizarra blanca de gran tamaño para anotar ideas. Las paredes tienen paneles insonorizados para reducir el ruido externo, y la iluminación es ajustable para mayor comodidad. Los asientos son modulares, lo que permite configuraciones flexibles según las necesidades del grupo.",
      capacidad: "5-8 personas",
      
      imagen: "images/focus.png",
    },
    {
      id: "cardHabitacion3",
      titulo: "Sala Horizon",
      descripcion:
        "Una sala premium pensada para grandes reuniones o talleres. Cuenta con una mesa ovalada moderna, un televisor 4K de 75 pulgadas para presentaciones, y un sistema de videoconferencia de última generación. Además, tiene estaciones de carga para dispositivos y una cafetera integrada para mantener a todos energizados. Los tonos cálidos en la decoración brindan un ambiente acogedor y profesional.",
      capacidad: "12-15 personas",
      
      imagen: "images/horizon.png",
    },
    {
      id: "cardHabitacion4",
      titulo: "Sala Nexus",
      descripcion:
        "Perfecta para sesiones creativas y colaborativas. Cuenta con un sistema interactivo de pantalla táctil y un video beam ultramoderno. Tiene paredes de vidrio para escribir con marcadores especiales y sofás modulares que se pueden mover según las necesidades del equipo. Incluye iluminación LED personalizable que se adapta al ambiente deseado (frío para enfoque, cálido para lluvia de ideas).",
      capacidad: "8-12 personas",
      
      imagen: "images/nexxus.png",
    },
    {
      id: "cardHabitacion5",
      titulo: "Sala Innovate",
      descripcion:
        "Un espacio futurista para eventos, talleres y reuniones de alto impacto. Equipada con un proyector láser de alta definición y sonido envolvente. Las mesas y sillas son ajustables y plegables, permitiendo configuraciones tipo aula, en círculo o abiertas. También cuenta con un sistema de realidad virtual opcional para presentaciones inmersivas y una zona de descanso con pufs y una barra de snacks saludable.",
      capacidad: "10-20 personas",
      
      imagen: "images/innovate.png",
    },
  ];

  return (
    <div>
      

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
                    <small className="text-body-secondary">
                      Capacidad: {habitacion.capacidad}
                      
                      
                    </small>
                  </p>
                  <p className={`estado-habitacion ${estadoHabitaciones[habitacion.id] === "disponible" ? "text-success" : "text-danger"}`}>
                    {estadoHabitaciones[habitacion.id] === "disponible" ? "Disponible" : "Reservada"}
                  </p>
                  <button
                    type="button"
                    className={`btn ${estadoHabitaciones[habitacion.id] === "disponible" ? "btn-success" : "btn-danger"}`}
                    onClick={() => mostrarFormularioReserva(habitacion.id)}
                  >
                    {estadoHabitaciones[habitacion.id] === "disponible" ? "Reservar" : "No Disponible"}
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
