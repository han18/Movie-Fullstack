import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const themeCtx = useContext(ThemeContext);
  console.log(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies"> Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
