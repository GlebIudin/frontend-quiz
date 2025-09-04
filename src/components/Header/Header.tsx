import styles from "./Header.module.css";
import stickerGleb from "../../assets/stickerGleb.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoAndTitle}>
        <img className={styles.logo} src={stickerGleb}></img>
        <Link className={styles.link} to="/">
          <h2 className={styles.title}>Мой сайт</h2>
        </Link>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <button className={styles.button}>Таблица лидеров</button>
          </li>
          <li>
            <button className={styles.button}>
              Случайная фронтендерская мудрость
            </button>
          </li>
          <li>
            <Link className={`${styles.link} ${styles.button}`} to="/about">
              О сайте
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
