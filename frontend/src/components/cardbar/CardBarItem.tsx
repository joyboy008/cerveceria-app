import { Link } from "react-router-dom";
import bar from "../../assets/imgs/bar.png";
import { CardBarInfo } from "./CardBarInfo";
import { Brewery } from "../../types/brewery";

export const CardBarItem = ({ brew }: { brew: Brewery }) => (
  <div className="card mb-3 rounded" key={brew.id}>
    <h2>{brew.name}</h2>
    <div className="items-container">
      <div className="imgItem">
        <img src={bar} alt="bar" width={"64px"} />
      </div>
      <div>
        <CardBarInfo
          address={brew.address_1}
          city={brew.city}
          state={brew.state}
          phone={brew.phone}
        />
      </div>
    </div>
    <div className="footer">
      <Link to={`/perid/${brew.id}`}>
        <button className="button">Ver más</button>
      </Link>
    </div>
  </div>
);
