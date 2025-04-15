import svgLocation from "../../assets/imgs/map-pin.svg";
import svgPhone from "../../assets/imgs/phone.svg";
import './stylesCardBar.css'

interface Props {
  address: string;
  city: string;
  state: string;
  phone: string;
}

export const CardBarInfo = ({ address, city, state, phone }: Props) => (
  <>
    <div className="address">
      <img className="" src={svgLocation} alt="Ubicación" width={16} />
      <p className="text-ellipsis">
        {address}, {city}, {state}
      </p>
    </div>
    <p className="">
      <img className="m-1" src={svgPhone} alt="Teléfono" width={16} />
      {phone}
    </p>
  </>
);
