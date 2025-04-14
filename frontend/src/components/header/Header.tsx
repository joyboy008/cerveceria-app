import "./stylesHeader.css";
import bell from "../../assets/imgs/bell.svg";
import user from "../../assets/imgs/user.svg";
import left from "../../assets/imgs/arrow-left.svg";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnLogout = () => {
    logout();
  };

  const handleBack = () => {
    navigate(-1); // Volver a la página anterior
  };

  const isInBreweryDetail = location.pathname.startsWith("/perid/");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-between align-items-center">
        {isInBreweryDetail ? (
          <button className="buttonHeader" onClick={handleBack}>
            <img src={left} alt="regresar" />
          </button>
        ) : (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        <div>
          <a className="navbar-brand" href="#">
            <img
              className="m-1"
              src={bell}
              alt="notificaciones"
              width={16}
              height={16}
            />
          </a>
          <a onClick={handleOnLogout} className="navbar-brand" href="#">
            <img
              className="m-1"
              src={user}
              alt="usuario"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
