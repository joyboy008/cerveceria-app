import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { CardBar } from "../components/cardbar/CardBar";
import { DefaultLayout } from "../components/defaultlayout/DefaultLayout";
import { Alert } from "../components/alert/Alert";

interface Brewery {
  id: string;
  name: string;
  address_1: string;
  city: string;
  phone: string;
  state: string;
}

export default function Breweries() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [breweriesInCalifornia, setBreweriesInCalifornia] = useState<Brewery[]>(
    []
  );
  const { state } = useAuth();

  useEffect(() => {
    api
      .get("/breweries/all")
      .then((res) => setBreweries(res.data))
      .catch((err) =>
        console.error("Error al obtener todas las cervecerías", err)
      );
  }, []);

  useEffect(() => {
    api
      .get("/breweries/state")
      .then((respuesta) => setBreweriesInCalifornia(respuesta.data))
      .catch((err) =>
        console.error("Error al obtener cervecerías de california", err)
      );
  }, []);

  return (
    <DefaultLayout>
      <Alert />

      <CardBar title="Todas las opciones" restaurante={breweries} />
      <CardBar
        title="Opciones en California"
        restaurante={breweriesInCalifornia}
      />
      <div>
        <h1>Bienvenido {state.user ?? "Invitado"}</h1>
        <p>Token: {state.token ? "✅ Autenticado" : "❌ No autenticado"}</p>
      </div>
    </DefaultLayout>
  );
}
