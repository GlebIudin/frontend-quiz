import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.infoBlock}>
        <h2 className={styles.infoBlockTitle}>Gleb Iudin</h2>
        <h2 className={styles.infoBlockTitle}>TG: @jorogumo</h2>
        <h2 className={styles.infoBlockTitle}>2025</h2>
      </div>
    </div>
  );
};

export default Footer;
