from flask import Blueprint, request, jsonify
from database.db import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.emergency_contact import EmergencyContact

contacts_bp = Blueprint("contacts", __name__)


# Add Contact
@contacts_bp.route("/contacts", methods=["POST"])
def add_contact():
    data = request.get_json()

    if not data:
        return jsonify({
            "message": "No data provided"
        }), 400

    user_id = data.get("user_id")
    name = data.get("name")
    phone = data.get("phone")
    relation = data.get("relation")

    if not user_id or not name or not phone:
        return jsonify({
            "message": "User ID, Name and Phone are required"
        }), 400

    existing_contact = EmergencyContact.query.filter_by(
        user_id=user_id,
        phone=phone
    ).first()

    if existing_contact:
        return jsonify({
            "message": "Contact already exists"
        }), 400

    contact = EmergencyContact(
        user_id=user_id,
        name=name,
        phone=phone,
        relation=relation
    )

    db.session.add(contact)
    db.session.commit()

    return jsonify({
        "message": "Contact added successfully"
    }), 201


# Get All Contacts
@contacts_bp.route("/contacts/<int:user_id>", methods=["GET"])
def get_contacts(user_id):

    contacts = EmergencyContact.query.filter_by(
        user_id=user_id
    ).all()

    result = []

    for contact in contacts:
        result.append({
            "id": contact.id,
            "name": contact.name,
            "phone": contact.phone,
            "relation": contact.relation
        })

    return jsonify(result), 200


# Delete Contact
@contacts_bp.route("/contacts/<int:id>", methods=["DELETE"])
def delete_contact(id):

    contact = EmergencyContact.query.get(id)

    if not contact:
        return jsonify({
            "message": "Contact not found"
        }), 404

    db.session.delete(contact)
    db.session.commit()

    return jsonify({
        "message": "Contact deleted successfully"
    }), 200
@contacts_bp.route("/my-contacts", methods=["GET"])
@jwt_required()
def get_my_contacts():
    user_id = get_jwt_identity()

    contacts = EmergencyContact.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": c.id,
            "name": c.name,
            "phone": c.phone
        }
        for c in contacts
    ])