from flask import Blueprint, jsonify

voice_bp = Blueprint("voice", __name__)


@voice_bp.route("/voice-sos", methods=["GET"])
def voice_sos():

    return jsonify({
        "message": "Voice SOS Activated",
        "status": "Emergency Alert Sent"
    }), 200