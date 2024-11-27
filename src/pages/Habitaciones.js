import React from "react";

const Habitaciones = () => {
  const habitaciones = [
    {
      id: "cardHabitacion1",
      titulo: "Sala Space",
      descripcion: (
        <ul>
          <li>Sala funcional para trabajo colaborativo</li>
          <li>Mesa de madera y sillas ergonómicas</li>
          <li>Iluminación natural con ventanales amplios</li>
          <li>Ideal para reuniones sin tecnología o discusiones</li>
        </ul>
      ),
      capacidad: "7-10 personas",
      imagen: "images/space.png",
    },
    {
      id: "cardHabitacion2",
      titulo: "Sala Focus",
      descripcion: (
        <ul>
          <li>Espacio diseñado para la concentración y el brainstorming.</li>
          <li>Equipada con un video beam y una pizarra blanca de gran tamaño para anotar ideas.</li>
          <li>Paredes con paneles insonorizados para reducir el ruido externo.</li>
          <li>Iluminación ajustable para mayor comodidad.</li>
          <li>Asientos modulares que permiten configuraciones flexibles según las necesidades del grupo.</li>
        </ul>
      ),
      capacidad: "5-8 personas",
      imagen: "images/focus.png",
    },
    {
      id: "cardHabitacion3",
      titulo: "Sala Horizon",
      descripcion: (
        <ul>
          <li>Diseñada para concentración y brainstorming.</li>
          <li>Incluye video beam y pizarra blanca grande.</li>
          <li>Paredes insonorizadas para reducir ruido.</li>
          <li>Iluminación ajustable para comodidad.</li>
          <li>Asientos modulares y configurables.</li>
        </ul>
      ),
      capacidad: "12-15 personas",
      imagen: "images/horizon.png",
    },
    {
      id: "cardHabitacion4",
      titulo: "Sala Nexus",
      descripcion: (
        <ul>
          <li>Para concentración y brainstorming.</li>
          <li>Con video beam y pizarra grande.</li>
          <li>Paredes insonorizadas.</li>
          <li>Iluminación ajustable.</li>
          <li>Asientos modulares.</li>
        </ul>
      ),
      capacidad: "8-12 personas",
      imagen: "images/nexxus.png",
    },
    {
      id: "cardHabitacion5",
      titulo: "Sala Innovate",
      descripcion: (
        <ul>
          <li>Sala premium para reuniones o talleres.</li>
          <li>Mesa ovalada moderna.</li>
          <li>Televisor 4K de 75 pulgadas.</li>
          <li>Sistema de videoconferencia avanzado.</li>
          <li>Estaciones de carga y cafetera integrada.</li>
          <li>Decoración con tonos cálidos y profesional.</li>
        </ul>
      ),
      capacidad: "10-20 personas",
      imagen: "images/innovate.png",
    },
  ];

  return (
    <div>
      <div className="zonaHabitaciones">
        <h1>Habitaciones Disponibles</h1>
      </div>

      <main>
        {habitaciones.map((habitacion) => (
          <div className="card mb-3" key={habitacion.id} id={habitacion.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={habitacion.imagen}
                  className="img-fluid rounded-start"
                  alt={habitacion.titulo}
                />
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Habitaciones;
