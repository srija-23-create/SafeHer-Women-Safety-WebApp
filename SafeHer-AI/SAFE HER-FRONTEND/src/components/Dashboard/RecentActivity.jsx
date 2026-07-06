import {
  FaBell,
  FaMapMarkerAlt,
  FaRobot,
  FaUserPlus,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaBell className="text-rose-500" />,
      title: "SOS Alert Triggered",
      time: "2 hours ago",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      title: "Live Location Shared",
      time: "Yesterday",
    },
    {
      icon: <FaRobot className="text-indigo-500" />,
      title: "AI Assistant Used",
      time: "2 days ago",
    },
    {
      icon: <FaUserPlus className="text-green-500" />,
      title: "Emergency Contact Added",
      time: "3 days ago",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">
                {activity.icon}
              </div>

              <div>
                <h3 className="font-semibold">
                  {activity.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {activity.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;