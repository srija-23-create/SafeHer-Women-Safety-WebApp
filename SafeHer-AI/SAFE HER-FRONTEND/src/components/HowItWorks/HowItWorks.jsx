import { FaUserShield, FaBell, FaMapMarkedAlt } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserShield className="text-5xl text-red-600" />,
      title: "Register",
      description:
        "Create your SafeHer AI account and add trusted emergency contacts.",
    },
    {
      icon: <FaBell className="text-5xl text-red-600" />,
      title: "Press SOS",
      description:
        "In an emergency, press the SOS button to instantly trigger an alert.",
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-red-600" />,
      title: "Share Live Location",
      description:
        "Your trusted contacts receive your live location and emergency notification.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Three simple steps to stay safe.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;