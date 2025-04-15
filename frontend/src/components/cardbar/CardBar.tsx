import { Brewery } from "../../types/brewery";
import { CardBarItem } from "./CardBarItem";
import "./stylesCardBar.css";

interface Props {
  restaurante: Brewery[];
  title: string;
}

export const CardBar = ({ restaurante, title }: Props) => (
  <section className="cards m-3">
    <h1 className="text-xl font-bold mb-4">{title}</h1>
    <div className="cards-carousel">
      {restaurante.map((brew) => (
        <CardBarItem key={brew.id} brew={brew} />
      ))}
    </div>
  </section>
);
