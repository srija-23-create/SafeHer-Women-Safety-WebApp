import Navbar from "../../components/Navbar/Navbar";
import Statistics from "../../components/Statistics/Statistics";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AIFeatures from "../../components/AIFeatures/AIFeatures";
import SOSPreview from "../../components/SOSPreview/SOSPreview";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h1 className="text-6xl font-extrabold leading-tight">
              Your Safety,
              <span className="text-red-600"> Our Priority</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              SafeHer AI is an intelligent women safety platform that provides
              instant SOS alerts, AI assistance, live location sharing, and
              emergency support whenever you need it.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition">
                Get Started
              </button>

              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-xl hover:bg-red-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-red-200 flex items-center justify-center shadow-2xl">
              <span className="text-8xl">🛡️</span>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Features Section */}
      <Features />
      <HowItWorks />
      <AIFeatures />
      <SOSPreview />
    </div>
  );
}

export default Home;