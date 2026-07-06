import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaRobot,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleRegister = async () => {
  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/login");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-rose-50 to-indigo-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-rose-500 via-pink-500 to-indigo-600 text-white p-12">

          <h1 className="text-5xl font-bold">
            SafeHer AI
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Create your account and stay protected anytime, anywhere.
          </p>

          <div className="mt-12 space-y-8">

            <div className="flex gap-5">
              <FaShieldAlt className="text-3xl mt-1" />
              <div>
                <h3 className="font-semibold text-xl">
                  One Tap SOS
                </h3>
                <p className="text-white/80">
                  Alert your trusted contacts instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaMapMarkerAlt className="text-3xl mt-1" />
              <div>
                <h3 className="font-semibold text-xl">
                  Live Location
                </h3>
                <p className="text-white/80">
                  Share your live location during emergencies.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaRobot className="text-3xl mt-1" />
              <div>
                <h3 className="font-semibold text-xl">
                  AI Assistant
                </h3>
                <p className="text-white/80">
                  AI-powered safety guidance 24/7.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-center text-slate-800">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-3 mb-8">
            Join SafeHer AI and stay protected.
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="font-semibold">Full Name</label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3">
              <FaUser className="text-gray-400 mr-3" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full outline-none"
                />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="font-semibold">Email</label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3">
              <FaEnvelope className="text-gray-400 mr-3" />

             <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="font-semibold">Phone Number</label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3">
              <FaPhone className="text-gray-400 mr-3" />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full outline-none"
                />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="font-semibold">Password</label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full outline-none"
                />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="font-semibold">Confirm Password</label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full outline-none"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold transition"
            >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-rose-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;