import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-600">
          SafeHer AI
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </li>

          <li>
            <a href="#features" className="hover:text-red-600">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-red-600">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;