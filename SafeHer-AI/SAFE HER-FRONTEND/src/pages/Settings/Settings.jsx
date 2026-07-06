import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

function Settings() {

  const [settings, setSettings] = useState({
    notifications: true,
    liveLocation: false,
    darkMode: false,
    sosConfirmation: true,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("settings");

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const darkMode = settings.darkMode;

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked,
    });
  };

  const saveSettings = () => {
    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    alert("Settings Saved Successfully");

    window.location.reload();
  };

  return (
    <DashboardLayout>

      <h1
        className={`text-4xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        Settings
      </h1>

      <div
        className={`rounded-2xl shadow-lg p-8 transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <div className="space-y-6">

          <label className="flex justify-between items-center">

            <span className={darkMode ? "text-white" : "text-black"}>
              Enable Notifications
            </span>

            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />

          </label>

          <label className="flex justify-between items-center">

            <span className={darkMode ? "text-white" : "text-black"}>
              Share Live Location Automatically
            </span>

            <input
              type="checkbox"
              name="liveLocation"
              checked={settings.liveLocation}
              onChange={handleChange}
            />

          </label>

          <label className="flex justify-between items-center">

            <span className={darkMode ? "text-white" : "text-black"}>
              Dark Mode
            </span>

            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />

          </label>

          <label className="flex justify-between items-center">

            <span className={darkMode ? "text-white" : "text-black"}>
              SOS Confirmation Popup
            </span>

            <input
              type="checkbox"
              name="sosConfirmation"
              checked={settings.sosConfirmation}
              onChange={handleChange}
            />

          </label>

          <button
            onClick={saveSettings}
            className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl"
          >
            Save Settings
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Settings;