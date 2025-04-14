import { useEffect, useState } from "react";
import { getAllBreweries, getBreweriesCalifornia } from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { CardBar } from "../components/cardbar/CardBar";
import { DefaultLayout } from "../components/defaultlayout/DefaultLayout";
import { Alert } from "../components/alert/Alert";
import { Loader } from "../components/loader/Loader";

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
  const [loading, setLoading] = useState(true);

  const { state } = useAuth();

  useEffect(() => {
    if (!state?.token) return;

    const fetchBreweries = async () => {
      try {
        setLoading(true);

        const [allRes, caRes] = await Promise.all([
          getAllBreweries(state.token!),
          getBreweriesCalifornia(state.token!),
        ]);

        setBreweries(allRes?.data);
        setBreweriesInCalifornia(caRes?.data);
      } catch (err) {
        console.error("Error al obtener cervecerías", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  if (loading) {
    return <Loader />; // Puedes reemplazar con un spinner
  }

  return (
    <DefaultLayout>
      <Alert />
      {loading ? (
        <Loader />
      ) : (
        <section className="cards-main">
          <CardBar title="Todas las opciones" restaurante={breweries} />
          <CardBar
            title="Opciones en California"
            restaurante={breweriesInCalifornia}
          />
        </section>
      )}
    </DefaultLayout>
  );
}
