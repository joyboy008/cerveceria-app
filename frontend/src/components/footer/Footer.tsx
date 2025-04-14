import "./stylesFooter.css";
import home from "../../assets/imgs/home.svg";
import calendar from "../../assets/imgs/calendar.svg";
import chat from "../../assets/imgs/message-circle.svg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Volver a la página anterior
  };
  return (
    <div className="container-footer">
      <button className="btns">
        <img src={calendar} alt="home" />
        <p>Calendario</p>
      </button>
      <button className="btns" onClick={handleBack}>
        <img src={home} alt="home" />

        <p>Inicio</p>
      </button>{" "}
      <button className="btns">
        <img src={chat} alt="chat" />
        <p>Chat</p>
      </button>
    </div>
  );
};
