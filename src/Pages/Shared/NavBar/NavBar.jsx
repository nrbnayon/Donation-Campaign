import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Resources/Logo.png";
const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="text-xl">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="btn btn-ghost md:text-xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="btn btn-ghost md:text-xl">
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li className="btn btn-ghost md:text-xl">
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
