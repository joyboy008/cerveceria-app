import styles from "./stylesAlert.module.css";

export const Alert = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.icon}>⚠️</span>
      <div className={styles.content}>
        <strong>Happy Hour</strong>
        <p>16:00 - 17:00 hs MEX</p>
      </div>
    </div>
  );
};
