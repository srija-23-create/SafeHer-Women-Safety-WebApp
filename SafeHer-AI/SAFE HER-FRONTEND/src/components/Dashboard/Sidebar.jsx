import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaUsers,
  FaRobot,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const darkMode =
    JSON.parse(localStorage.getItem("settings"))?.darkMode || false;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={`w-64 min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-slate-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold text-rose-400 mb-10">
        SafeHer AI
      </h1>

      <nav className="space-y-3">

        <Link
          to="/dashboard"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/sos"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaBell />
          SOS
        </Link>

        <Link
          to="/contacts"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaUsers />
          Contacts
        </Link>

        <Link
          to="/aichat"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaRobot />
          AI Assistant
        </Link>

        <Link
          to="/history"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaHistory />
          History
        </Link>

        <Link
          to="/profile"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className={`flex items-center gap-3 p-3 rounded-lg transition ${
            darkMode
              ? "hover:bg-gray-800"
              : "hover:bg-slate-700"
          }`}
        >
          <FaCog />
          Settings
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition text-left"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>
    </div>
  );
}

export default Sidebar;