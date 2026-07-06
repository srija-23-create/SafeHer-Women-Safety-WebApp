import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaRobot,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
        // Save token
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Save user details
        if (data.user) {
          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );
        }

        alert(data.message || "Login Successful");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login Failed");
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
            Smart Protection for Every Woman.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-5">
              <FaShieldAlt className="text-3xl mt-1" />

              <div>
                <h3 className="font-semibold text-xl">
                  One Tap SOS
                </h3>

                <p className="text-white/80">
                  Instantly notify your trusted contacts.
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
                  Share your location during emergencies.
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
                  Get AI-powered emergency guidance anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-10 lg:p-14">
          <h2 className="text-4xl font-bold text-slate-800 text-center">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Login to continue your journey safely.
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-700">
              Email Address
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-rose-400">
              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-700">
              Password
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-rose-400">
              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center mb-8">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>

            <a
              href="#"
              className="text-rose-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-8">
            <hr className="flex-1 border-gray-300" />

            <span className="px-4 text-gray-400">
              OR
            </span>

            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google */}
          <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition">
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-rose-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;