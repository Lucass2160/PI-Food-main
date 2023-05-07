import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="mainContainer">
      <Link className="link" to="/">
        Lading
      </Link>
      <Link className="link" to="/home">
        Home
      </Link>
      <Link className="link" to="/create">
        Form
      </Link>
    </div>
  );
};

export default NavBar;
