from flask import Blueprint, request, jsonify

location_bp = Blueprint("location", __name__)


@location_bp.route("/location", methods=["POST"])
def save_location():

    data = request.get_json()

    return jsonify({
        "message": "Location received successfully",
        "latitude": data["latitude"],
        "longitude": data["longitude"]
    }), 200