import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Resources/Logo.png";
// import Banner from "../../assets/Resources/Rectangle 4284.png";
import "./HomePage.css"; // Import CSS file for additional styling

const HomePage = () => {
  return (
    <div className="hero-container min-h-screen">
      <div className="navbar bg-transparent">
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
      <div className="hero-content text-center text-neutral-content min-h-[80vh] flex items-center justify-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
          <p className="mb-5 text-3xl font-bold text-black">
            I Grow By Helping People In Need
          </p>
          <div className="max-w-lg mx-auto flex items-center justify-center mt-10">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-full border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
