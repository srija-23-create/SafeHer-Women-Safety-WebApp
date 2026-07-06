import { FaLightbulb } from "react-icons/fa";

function SafetyTip() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-md p-6 mt-10">

      <div className="flex items-center gap-4">
        <FaLightbulb className="text-4xl text-yellow-500" />

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Today's AI Safety Tip
          </h2>

          <p className="text-gray-600 mt-2">
            Always share your trip details with a trusted contact before
            traveling alone, especially at night.
          </p>
        </div>
      </div>

    </div>
  );
}

export default SafetyTip;