from flask import Blueprint, request, jsonify

threat_bp = Blueprint("threat", __name__)


@threat_bp.route("/threat", methods=["POST"])
def detect_threat():

    data = request.get_json()
    text = data["message"].lower()

    dangerous_words = [
        "help",
        "follow",
        "kidnap",
        "attack",
        "stalking",
        "danger"
    ]

    risk = "Low"

    for word in dangerous_words:
        if word in text:
            risk = "High"
            break

    return jsonify({
        "message": text,
        "risk_level": risk
    }), 200