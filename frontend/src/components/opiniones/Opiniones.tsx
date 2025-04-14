import "./stylesOpiniones.css";

const opiniones = [
  {
    nombre: "Juan Pérez",
    avatar: "https://i.pravatar.cc/100?img=1",
    reseña: "Excelente servicio. Me atendieron rápido y con mucha amabilidad.",
  },
  {
    nombre: "María López",
    avatar: "https://i.pravatar.cc/100?img=2",
    reseña:
      "Muy profesionales. La experiencia fue muy positiva desde el principio.",
  },
  {
    nombre: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/100?img=3",
    reseña:
      "Instalaciones limpias y personal muy atento. Lo recomiendo totalmente.",
  },
];

export const Opiniones = () => {
  return (
    <div className="container py-3">
      <h2 className="mb-3">Opiniones</h2>
      <div className="row justify-content-center g-4">
        {opiniones.map((opinion, index) => (
          <div key={index} className="col-md-4">
            <div className=" h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center mb-1">
                    <img
                      src={opinion.avatar}
                      alt={`Avatar de ${opinion.nombre}`}
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <h5 className="card-title mb-0">{opinion.nombre}</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="respuesta">responder</span>
                  </div>
                </div>
                <p className="card-text fst-italic">"{opinion.reseña}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
