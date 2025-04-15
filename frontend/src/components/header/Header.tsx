import "./stylesHeader.css";
import bell from "../../assets/imgs/bell.svg";
import user from "../../assets/imgs/user.svg";
import left from "../../assets/imgs/arrow-left.svg";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleOnLogout = () => {
    logout();
  };

  const isInBreweryDetail = location.pathname.startsWith("/perid/");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {isInBreweryDetail ? (
          <Link to={"/"} className="buttonHeader">
            <img src={left} alt="regresar" />
          </Link>
        ) : (
          <button className="buttonHeader">
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        <div>
          <Link to={""} className="navbar-brand">
            <img
              className="m-1"
              src={bell}
              alt="notificaciones"
              width={16}
              height={16}
            />
          </Link>
          <Link to={""} onClick={handleOnLogout} className="navbar-brand">
            <img
              className="m-1"
              src={user}
              alt="usuario"
              width={16}
              height={16}
            />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};
