import { useEffect, useState } from "react";

function Statistics() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    protected_days: 120,
    total_sos: 0,
    total_contacts: 0,
    total_ai_chats: 0,
  });

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {

    try {

      const response = await fetch(
        `http://127.0.0.1:5000/dashboard/${user.id}`
      );

      const data = await response.json();

      if (response.ok) {
        setStats(data);
      }

    } catch (error) {
      console.log(error);
    }

  };

  const statistics = [
    {
      number: stats.protected_days,
      label: "Protected Days",
    },
    {
      number: stats.total_sos,
      label: "SOS Alerts",
    },
    {
      number: stats.total_contacts,
      label: "Trusted Contacts",
    },
    {
      number: stats.total_ai_chats,
      label: "AI Chats",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      {statistics.map((stat, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 text-center"
        >

          <h2 className="text-3xl font-bold text-rose-500">
            {stat.number}
          </h2>

          <p className="text-gray-500 mt-2">
            {stat.label}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Statistics;