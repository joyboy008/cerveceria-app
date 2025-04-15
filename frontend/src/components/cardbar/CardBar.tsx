import { Link } from "react-router-dom";
import bar from "../../assets/imgs/bar.jpg";
import svgLocation from "../../assets/imgs/map-pin.svg";
import svgPhone from "../../assets/imgs/phone.svg";
import "./stylesCardBar.css";

interface Brewery {
  id: string;
  name: string;
  address_1: string;
  city: string;
  phone: string;
  state: string;
}

interface Props {
  restaurante: Brewery[];
  title: string;
}

export const CardBar = ({ restaurante, title }: Props) => {
  return (
    <section className="cards m-3">
      <h1 className="text-xl font-bold mb-4"> {title} </h1>
      <div className="cards-carousel">
        {restaurante.map((brew) => (
          <div className="card mb-3 rounded" key={brew.id}>
            <h2> {brew.name} </h2>
            <div className="items-container">
              <div className="imgItem">
                <img src={bar} alt="bar" width={"64px"} />
              </div>
              <div className="">
                <div className="address">
                  <img
                    className="m-1"
                    src={svgLocation}
                    alt="Ubicación"
                    width={16}
                    height={16}
                  />
                  <p className="text-ellipsis">
                    {brew.address_1}, {brew.city}, {brew.state}
                  </p>
                </div>
                <p className="">
                  <img
                    className="m-1"
                    src={svgPhone}
                    alt="Ubicación"
                    width={16}
                    height={16}
                  />
                  {brew.phone}
                </p>
              </div>
            </div>
            <div className="footer">
              <Link to={`/perid/${brew.id}`}>
                <button className="button">Ver más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
