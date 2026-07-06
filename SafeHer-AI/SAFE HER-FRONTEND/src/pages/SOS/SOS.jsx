import { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { FaExclamationTriangle, FaPhoneAlt } from "react-icons/fa";

function SOS() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);

  const triggerSOS = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    if (!user) {
      alert("Please login first.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);

          // Save SOS history in backend
          await fetch("http://127.0.0.1:5000/sos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              latitude,
              longitude,
            }),
          });

          // Get emergency contacts
          const contactsResponse = await fetch(
            `http://127.0.0.1:5000/contacts/${user.id}`
          );

          const contacts = await contactsResponse.json();

          console.log("Contacts:", contacts);

          if (!contacts.length) {
            alert("No emergency contacts found.");
            setLoading(false);
            return;
          }

          const locationLink =
            `https://maps.google.com/?q=${latitude},${longitude}`;

          const message =
            `🚨 EMERGENCY! I need help.\n\n` +
            `My Live Location:\n${locationLink}`;

          // First contact ki WhatsApp open chestundi
          const contact = contacts[0];

          let phone = contact.phone.replace(/\D/g, "");

          if (!phone.startsWith("91")) {
            phone = "91" + phone;
          }

          const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

          console.log("WhatsApp URL:", whatsappURL);

          alert("SOS Triggered Successfully");

          window.location.href = whatsappURL;
        } catch (error) {
          console.log(error);
          alert("Something went wrong.");
        }

        setLoading(false);
      },

      (error) => {
        console.log(error);
        alert("Unable to get your location.");
        setLoading(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">
          Emergency SOS
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Press the SOS button only during an emergency.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <button
            onClick={triggerSOS}
            disabled={loading}
            className="w-52 h-52 rounded-full bg-red-500 hover:bg-red-600 transition shadow-2xl text-white text-6xl font-bold"
          >
            {loading ? "Locating..." : "SOS"}
          </button>

          <p className="mt-8 text-gray-600">
            Pressing this button will:
          </p>

          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              Notify Emergency Contacts
            </li>

            <li className="flex items-center gap-3">
              📍 Share Live Location
            </li>

            <li className="flex items-center gap-3">
              🤖 Notify AI Assistant
            </li>

            <li className="flex items-center gap-3">
              🚓 Contact Nearby Emergency Services
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-xl flex gap-4">
          <FaExclamationTriangle className="text-yellow-600 text-3xl" />

          <div>
            <h3 className="font-bold">
              Warning
            </h3>

            <p>
              Use the SOS feature only in genuine emergencies.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SOS;