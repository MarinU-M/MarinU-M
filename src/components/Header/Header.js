import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__name">
        Marin Umegane
      </Link>
    </header>
  );
}

export default Header;
