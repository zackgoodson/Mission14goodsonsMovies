import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3 ">
        <ul className="navbar-nav flex-grow-1">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Podcasts" className="nav-link text-dark">
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movie/MovieList" className="nav-link text-dark">
              The List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
