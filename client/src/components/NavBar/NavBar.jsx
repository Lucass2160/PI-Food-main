import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link className={style.link} to="/">
        Lading
      </Link>
      <Link className={style.link} to="/home">
        Home
      </Link>
      <Link className={style.link} to="/create">
        Create
      </Link>
    </div>
  );
};

export default NavBar;
