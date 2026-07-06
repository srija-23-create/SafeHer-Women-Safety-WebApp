import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

function History() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const response = await fetch(
        `http://127.0.0.1:5000/sos/${user.id}`
      );

      const data = await response.json();

      if (response.ok) {
        setHistory(data);
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Alert History
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-rose-500 text-white">
            <tr>
              <th className="p-4 text-left">Date & Time</th>
              <th className="p-4 text-left">Activity</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>

  {history.length === 0 ? (

    <tr>
      <td
        colSpan="4"
        className="text-center p-8 text-gray-500"
      >
        No SOS History Found
      </td>
    </tr>

  ) : (

    history.map((item) => (

      <tr
        key={item.id}
        className="border-b hover:bg-gray-50"
      >

        <td className="p-4">
          {new Date(item.created_at).toLocaleString()}
        </td>

        <td className="p-4 font-semibold text-red-600">
          🚨 SOS Triggered
        </td>

        <td className="p-4">
  <a
    href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    📍 View on Map
  </a>

  <p className="text-xs text-gray-500 mt-1">
    {item.latitude}, {item.longitude}
  </p>
</td>

        <td className="p-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            🟢 Completed
          </span>
        </td>

      </tr>

    ))

  )}

</tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}

export default History;