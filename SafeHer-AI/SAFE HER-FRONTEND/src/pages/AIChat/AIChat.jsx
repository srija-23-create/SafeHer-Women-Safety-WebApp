import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

function AIChat() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-2">
        AI Safety Assistant 🤖
      </h1>

      <p className="text-gray-500 mb-8">
        Ask anything related to safety, emergencies, or travel.
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px] flex flex-col">

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto space-y-4">

          <div className="bg-rose-100 p-4 rounded-xl max-w-md">
            👋 Hello! I'm SafeHer AI. How can I help you today?
          </div>

          <div className="bg-blue-100 p-4 rounded-xl max-w-md ml-auto">
            How can I stay safe while travelling alone?
          </div>

          <div className="bg-rose-100 p-4 rounded-xl max-w-md">
            Always share your live location with trusted contacts, avoid isolated routes, and keep your phone charged.
          </div>

        </div>

        {/* Input Area */}
        <div className="mt-6 flex gap-4">

          <input
            type="text"
            placeholder="Ask SafeHer AI..."
            className="flex-1 border rounded-xl px-5 py-3 outline-none"
          />

          <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 rounded-xl">
            <FaPaperPlane />
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default AIChat;