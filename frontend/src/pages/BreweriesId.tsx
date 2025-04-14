import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DefaultLayout } from "../components/defaultlayout/DefaultLayout";
import { getBreweriesById } from "../api/axios";
import { Loader } from "../components/loader/Loader";
import { BreweriesIdComponent } from "../components/breweriesidcomponent/BreweriesIdComponent";
import { Opiniones } from "../components/opiniones/Opiniones";
import { useAuth } from "../context/AuthContext";

export const BreweriesId = () => {
  const { id } = useParams<{ id: string }>();
  const [brewery, setBrewery] = useState<any>(null);
  const { state } = useAuth();

  useEffect(() => {
    if (!state?.token) return;

    if (id) {
      getBreweriesById(state.token, id)
        .then((res) => setBrewery(res?.data))
        .catch((err) => console.error("Error al obtener la cervecería:", err));
    }
  }, [id]);

  return (
    <DefaultLayout>
      {brewery ? (
        <div className="breweries-component">
          {" "}
          <BreweriesIdComponent brewery={brewery} />{" "}
        </div>
      ) : (
        <Loader />
      )}
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
