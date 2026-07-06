import { useNavigate } from "react-router-dom";

function DashboardCard({ icon, title, description, link }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
    >

      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-slate-800">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-3 leading-6">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(link);
        }}
        className="mt-6 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-lg transition"
      >
        Open
      </button>

    </div>
  );
}

export default DashboardCard;