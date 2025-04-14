import { DefaultLayout } from "../defaultlayout/DefaultLayout";

export const Loader = () => {
  return (
    <section className="contenedor-general">
      <section className="loader">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">🍺</span>
        </div>
        <span className="text-info">Cargando cervecerías... 🍺</span>
      </section>
    </section>
  );
};
