import { FaMapMarkerAlt } from "react-icons/fa";

function LiveLocation() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        📍 Live Location
      </h2>

      <div className="h-72 bg-slate-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">

        <FaMapMarkerAlt className="text-6xl text-rose-500 mb-4" />

        <p className="text-gray-600">
          Live Map will appear here
        </p>

        <button className="mt-5 bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition">
          Share Current Location
        </button>

      </div>

    </div>
  );
}

export default LiveLocation;