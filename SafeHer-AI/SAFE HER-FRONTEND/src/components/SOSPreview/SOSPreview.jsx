import { FaExclamationTriangle } from "react-icons/fa";

function SOSPreview() {
  const handleSOS = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const locationLink = `https://maps.google.com/?q=${lat},${lon}`;

            const message =
              `🚨 EMERGENCY! I need help.\n\n` +
              `My Live Location:\n${locationLink}`;

            const response = await fetch(
              `http://127.0.0.1:5000/contacts/${user.id}`
            );

            const contacts = await response.json();

            console.log("Contacts:", contacts);

            if (!contacts.length) {
              alert("No emergency contacts found.");
              return;
            }

            // First contact ki WhatsApp open chestundi
            const contact = contacts[0];

            let phone = contact.phone.replace(/\D/g, "");

            if (!phone.startsWith("91")) {
              phone = "91" + phone;
            }

            const url =
              `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            console.log("WhatsApp URL:", url);

            alert("SOS Triggered Successfully");

            window.location.href = url;
          } catch (err) {
            console.error(err);
            alert("Failed to send SOS.");
          }
        },
        () => {
          alert("Please allow location access.");
        }
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold">
              One Tap
              <span className="text-red-600"> SOS Emergency</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Press the SOS button to instantly notify your emergency contacts,
              share your live location, and trigger AI-assisted emergency
              support.
            </p>

            <button
              onClick={handleSOS}
              className="mt-8 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition"
            >
              Send SOS
            </button>
          </div>

          <div className="flex justify-center">
            <div
              onClick={handleSOS}
              className="w-72 h-72 rounded-full bg-red-600 flex items-center justify-center shadow-2xl hover:scale-105 transition cursor-pointer"
            >
              <FaExclamationTriangle className="text-white text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SOSPreview;