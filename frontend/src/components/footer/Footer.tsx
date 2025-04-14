import "./stylesFooter.css";
import home from "../../assets/imgs/home.svg";
import calendar from "../../assets/imgs/calendar.svg";
import chat from "../../assets/imgs/message-circle.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-footer">
      <Link to={""} className="btns">
        <img src={calendar} alt="home" />
        <span>Calendario</span>
      </Link>
      <Link to={"/"} className="btns">
        <img src={home} alt="home" />

        <span>Inicio</span>
      </Link>{" "}
      <Link to={""} className="btns">
        <img src={chat} alt="chat" />
        <span>Chat</span>
      </Link>
    </div>
  );
};
