import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-stone-900  text-red-300 h-20 z-10 border-b border-red-600">
      <div className="navbar lg:w-[80%] md:w-[90%] sm:w-[96%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-lg uppercase hover:bg-red-400 hover:text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg uppercase hover:bg-red-400 hover:text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg uppercase hover:bg-red-400 hover:text-white"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg uppercase hover:bg-red-400 hover:text-white"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="text-4xl font-bold text-orange-600">FoodDY</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="text-lg uppercase hover:bg-red-400 hover:text-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg uppercase hover:bg-red-400 hover:text-white"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-lg uppercase hover:bg-red-400 hover:text-white"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-lg uppercase hover:bg-red-400 hover:text-white"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/loginorregister"}
            className="btn text-slate-950 text-lg uppercase bg-red-400 hover:bg-red-600"
          >
            Register / Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
