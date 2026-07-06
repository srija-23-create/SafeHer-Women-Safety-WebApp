import { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/profile/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert(data.message);

        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="space-y-6">

          <div>
            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl transition"
          >
            Save Changes
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;