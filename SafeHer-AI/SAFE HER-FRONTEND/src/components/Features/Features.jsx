import { FaShieldAlt, FaMapMarkerAlt, FaRobot } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaShieldAlt className="text-5xl text-red-600" />,
      title: "SOS Emergency",
      description: "Instant emergency alert with one click."
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-red-600" />,
      title: "Live Location",
      description: "Share your live location with trusted contacts."
    },
    {
      icon: <FaRobot className="text-5xl text-red-600" />,
      title: "AI Assistant",
      description: "AI-powered safety guidance and support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;