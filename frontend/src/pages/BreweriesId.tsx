import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DefaultLayout } from "../components/defaultlayout/DefaultLayout";
import api from "../api/axios";
import { Loader } from "../components/loader/Loader";
import { BreweriesIdComponent } from "../components/breweriesidcomponent/BreweriesIdComponent";
import { Opiniones } from "../components/opiniones/Opiniones";

export const BreweriesId = () => {
  const { id } = useParams<{ id: string }>();
  const [brewery, setBrewery] = useState<any>(null);

  useEffect(() => {
    if (id) {
      api
        .get(`/breweries/${id}`)
        .then((res) => setBrewery(res.data))
        .catch((err) => console.error("Error al obtener la cervecería:", err));
    }
  }, [id]);

  return (
    <DefaultLayout>
      {brewery ? <BreweriesIdComponent brewery={brewery} /> : <Loader />}
      <Opiniones />
      <div className="d-flex flex-column align-items-center justify-content-center mb-4">
        <button className="button mb-2" style={{ width: "300px" }}>
          Reservar mesa
        </button>
        <button className="button-2">Opciones de transporte</button>
      </div>
    </DefaultLayout>
  );
};
