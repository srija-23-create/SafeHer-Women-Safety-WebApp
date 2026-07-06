from flask import Blueprint, request, jsonify
from database.db import db
from models.sos_history import SOSHistory
from models.emergency_contact import EmergencyContact
from twilio.rest import Client

sos_bp = Blueprint("sos", __name__)

ACCOUNT_SID = "MEE_NEW_ACCOUNT_SID"
AUTH_TOKEN = "MEERU_REGENERATE_CHESINA_NEW_TOKEN"

client = Client(ACCOUNT_SID, AUTH_TOKEN)


@sos_bp.route("/sos", methods=["POST"])
def trigger_sos():
    try:
        data = request.get_json()

        user_id = data["user_id"]
        latitude = data["latitude"]
        longitude = data["longitude"]

        # Save SOS history
        sos = SOSHistory(
            user_id=user_id,
            latitude=latitude,
            longitude=longitude,
            status="Triggered"
        )

        db.session.add(sos)
        db.session.commit()

        # Location link
        location_link = (
            f"https://maps.google.com/?q={latitude},{longitude}"
        )

        message = (
            "🚨 EMERGENCY ALERT!\n"
            "I need help.\n\n"
            f"My Live Location:\n{location_link}"
        )

        # Get emergency contacts
        contacts = EmergencyContact.query.filter_by(
            user_id=user_id
        ).all()

        # Send WhatsApp to all contacts
        for contact in contacts:
            phone = contact.phone

            if not phone.startswith("91"):
                phone = "91" + phone

            client.messages.create(
                from_="whatsapp:+14155238886",
                body=message,
                to=f"whatsapp:+{phone}"
            )

        return jsonify({
            "message": "SOS Triggered Successfully"
        }), 201

    except Exception as e:
        print("ERROR:", e)
        return jsonify({
            "message": str(e)
        }), 500


@sos_bp.route("/sos/<int:user_id>", methods=["GET"])
def get_sos_history(user_id):
    records = SOSHistory.query.filter_by(
        user_id=user_id
    ).all()

    result = []

    for record in records:
        result.append({
            "id": record.id,
            "latitude": record.latitude,
            "longitude": record.longitude,
            "status": record.status,
            "created_at": record.created_at
        })

    return jsonify(result), 200