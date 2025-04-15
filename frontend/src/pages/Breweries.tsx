import { useEffect, useState } from "react";
import { getAllBreweries, getBreweriesCalifornia } from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { CardBar } from "../components/cardbar/CardBar";
import { DefaultLayout } from "../components/defaultlayout/DefaultLayout";
import { Alert } from "../components/alert/Alert";
import { Loader } from "../components/loader/Loader";
import { LoadMoreButton } from "../components/morebutton/LoadMoreButton";
import { Brewery } from "../types/brewery";

export default function Breweries() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [breweriesInCalifornia, setBreweriesInCalifornia] = useState<Brewery[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [visibleAll, setVisibleAll] = useState(4);
  const [visibleCalifornia, setVisibleCalifornia] = useState(4);

  const loadMoreAll = () => setVisibleAll((prev) => prev + 4);
  const loadMoreCalifornia = () => setVisibleCalifornia((prev) => prev + 4);

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
          <CardBar
            title="Todas las opciones"
            restaurante={breweries.slice(0, visibleAll)}
          />
          {visibleAll < breweries.length && (
            <LoadMoreButton
              onClick={loadMoreAll}
              isVisible={visibleAll < breweries.length}
            />
          )}

          <CardBar
            title="Opciones en California"
            restaurante={breweriesInCalifornia.slice(0, visibleCalifornia)}
          />
          {visibleCalifornia < breweriesInCalifornia.length && (
            <LoadMoreButton
              onClick={loadMoreCalifornia}
              isVisible={visibleCalifornia < breweriesInCalifornia.length}
              text="Más bares..."
            />
          )}
        </section>
      )}
    </DefaultLayout>
  );
}
