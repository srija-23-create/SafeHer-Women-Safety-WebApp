import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import Statistics from "../../components/Dashboard/Statistics";
import RecentActivity from "../../components/Dashboard/RecentActivity";
import LiveLocation from "../../components/Dashboard/LiveLocation";
import SafetyTip from "../../components/Dashboard/SafetyTip";

import {
  FaBell,
  FaRobot,
  FaUsers,
  FaMapMarkerAlt,
  FaHistory,
  FaCog,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back {user?.name} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Stay safe with AI-powered protection and emergency assistance.
        </p>
      </div>

      {/* SOS Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              🚨 Emergency SOS
            </h2>

            <p className="mt-2 text-rose-100">
              Instantly alert your trusted contacts and share your live location.
            </p>
          </div>

          <button
            onClick={() => navigate("/sos")}
            className="mt-6 md:mt-0 bg-white text-rose-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            ACTIVATE SOS
          </button>
        </div>
      </div>

      {/* Statistics */}
      <Statistics />

      {/* Quick Actions */}
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        <DashboardCard
          icon={<FaBell className="text-rose-500" />}
          title="SOS Emergency"
          description="Send emergency alerts instantly."
          link="/sos"
        />

        <DashboardCard
          icon={<FaRobot className="text-indigo-500" />}
          title="AI Assistant"
          description="Chat with AI for safety guidance."
          link="/aichat"
        />

        <DashboardCard
          icon={<FaUsers className="text-green-500" />}
          title="Emergency Contacts"
          description="Manage trusted emergency contacts."
          link="/contacts"
        />

        <DashboardCard
          icon={<FaMapMarkerAlt className="text-blue-500" />}
          title="Live Tracking"
          description="Share your live location."
          link="/location"
        />

        <DashboardCard
          icon={<FaHistory className="text-yellow-500" />}
          title="Alert History"
          description="View previous emergency alerts."
          link="/history"
        />

        <DashboardCard
          icon={<FaCog className="text-gray-500" />}
          title="Settings"
          description="Customize your preferences."
          link="/settings"
        />

      </div>

      {/* Recent Activity */}
      <div className="mt-10">
        <RecentActivity />
      </div>

      {/* Live Location */}
      <LiveLocation />

      {/* Safety Tip */}
      <SafetyTip />
    </DashboardLayout>
  );
}

export default Dashboard;