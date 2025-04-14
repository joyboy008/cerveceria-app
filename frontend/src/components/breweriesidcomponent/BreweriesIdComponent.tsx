import bar from "../../assets/imgs/bar-cali.jpg";
import svgLocation from "../../assets/imgs/map-pin.svg";
import svgPhone from "../../assets/imgs/phone.svg";
import "./stylesBreaweriesIdComponent.css";

export const BreweriesIdComponent = ({ brewery }: any) => {
  return (
    <div className="cards-wrapper mb-3 rounded" key={brewery.id}>
      <h2> {brewery.name} </h2>
      <div className="items-container">
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
              {brewery.address_1}, {brewery.city}, {brewery.state}
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
            {brewery.phone}
          </p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <img className="carrusel-item" src={bar} alt="bar" />
          <img className="carrusel-item" src={bar} alt="bar" />
          <img className="carrusel-item" src={bar} alt="bar" />
          <img className="carrusel-item" src={bar} alt="bar" />
          <img className="carrusel-item" src={bar} alt="bar" />
        </div>
      </div>
    </div>
  );
};
