import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header({ closeOpaneModel }) {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <p>Anime note</p>
        </div>
      </Link>
      <nav>
        <Link to="/favorites">
          <p>Избраные</p>
        </Link>
        <div onClick={closeOpaneModel} className={styles.user}>
          <FaRegUser />
        </div>
      </nav>
    </div>
  );
}

export default Header;
