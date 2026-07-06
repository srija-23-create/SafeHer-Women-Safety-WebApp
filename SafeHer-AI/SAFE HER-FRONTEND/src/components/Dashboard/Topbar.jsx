import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const darkMode =
    JSON.parse(localStorage.getItem("settings"))?.darkMode || false;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={`shadow px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        darkMode
          ? "bg-gray-950 text-white border-b border-gray-700"
          : "bg-white text-black"
      }`}
    >
      <div>
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Dashboard
        </h2>

        <p
          className={`${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <FaBell
          className={`text-2xl cursor-pointer ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        />

        <div className="relative">

          <div
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaUserCircle className="text-3xl text-rose-500" />

            <div className="flex flex-col">
              <span className="font-semibold">
                {user?.name || "User"}
              </span>
            </div>
          </div>

          {showMenu && (
            <div
              className={`absolute right-0 mt-3 w-56 rounded-xl shadow-xl border z-50 overflow-hidden ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white"
              }`}
            >
              <button
                onClick={() => navigate("/profile")}
                className={`w-full text-left px-4 py-3 ${
                  darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                👤 My Profile
              </button>

              <button
                onClick={() => navigate("/settings")}
                className={`w-full text-left px-4 py-3 ${
                  darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                ⚙️ Settings
              </button>

              <button
                onClick={() => navigate("/history")}
                className={`w-full text-left px-4 py-3 ${
                  darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                📜 History
              </button>

              <hr className={darkMode ? "border-gray-700" : ""} />

              <button
                onClick={handleLogout}
                className={`w-full text-left px-4 py-3 text-red-500 ${
                  darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-red-50"
                }`}
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Topbar;