import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {

  const darkMode =
    JSON.parse(localStorage.getItem("settings"))?.darkMode || false;

  return (
    <div className="flex">

      <Sidebar />

      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-slate-100 text-black"
        }`}
      >

        <Topbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;