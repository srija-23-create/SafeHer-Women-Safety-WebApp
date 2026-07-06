from flask import Blueprint, jsonify
from models.user import User
from models.sos_history import SOSHistory
from models.emergency_contact import EmergencyContact

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/dashboard/<int:user_id>", methods=["GET"])
def dashboard(user_id):

    total_contacts = EmergencyContact.query.filter_by(
        user_id=user_id
    ).count()

    total_sos = SOSHistory.query.filter_by(
        user_id=user_id
    ).count()

    return jsonify({
        "protected_days": 120,
        "total_contacts": total_contacts,
        "total_sos": total_sos,
        "total_ai_chats": 0
    })