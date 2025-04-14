import "./stylesAlert.css";

export const Alert = () => {
  return (
    <div className="alert-banner">
      <span className="alert-icon">⚠️</span>
      <div className="alert-content">
        <strong>Happy Hour</strong>
        <p>16:00 - 17:00 hs MEX</p>
      </div>
    </div>
  );
};
