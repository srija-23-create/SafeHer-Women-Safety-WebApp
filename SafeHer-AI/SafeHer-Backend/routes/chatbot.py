from flask import Blueprint, request, jsonify

chatbot_bp = Blueprint("chatbot", __name__)


@chatbot_bp.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()
    message = data["message"].lower()

    if "help" in message:
        reply = "Please move to a safe place and trigger SOS."

    elif "follow" in message:
        reply = "Someone following you may be dangerous. Trigger SOS and call emergency contacts."

    elif "emergency" in message:
        reply = "Contact nearby police and share your live location."

    else:
        reply = "How can I help you stay safe?"

    return jsonify({
        "reply": reply
    }), 200