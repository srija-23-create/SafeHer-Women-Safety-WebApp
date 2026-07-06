import {
  FaRobot,
  FaMicrophone,
  FaBrain,
  FaComments,
} from "react-icons/fa";

function AIFeatures() {
  const aiFeatures = [
    {
      icon: <FaRobot className="text-5xl text-red-600" />,
      title: "AI Chat Assistant",
      description:
        "Get instant safety guidance and emergency support through an AI-powered assistant.",
    },
    {
      icon: <FaMicrophone className="text-5xl text-red-600" />,
      title: "Voice SOS",
      description:
        "Trigger emergency alerts using voice commands during dangerous situations.",
    },
    {
      icon: <FaBrain className="text-5xl text-red-600" />,
      title: "Threat Detection",
      description:
        "AI analyzes messages and identifies potential threats in real time.",
    },
    {
      icon: <FaComments className="text-5xl text-red-600" />,
      title: "Smart Suggestions",
      description:
        "Receive personalized safety recommendations based on your situation.",
    },
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          AI Powered Features
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Intelligent technologies designed to improve personal safety.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AIFeatures;