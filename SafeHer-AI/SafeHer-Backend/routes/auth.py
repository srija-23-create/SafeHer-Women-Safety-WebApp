from flask import Blueprint, request, jsonify
from database.db import db
from models.user import User
import bcrypt

auth_bp = Blueprint("auth", __name__)


# ---------------- REGISTER ---------------- #
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    phone = data.get("phone")

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 400

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    user = User(
        name=name,
        email=email,
        password=hashed_password,
        phone=phone
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "User registered successfully"
    }), 201


# ---------------- LOGIN ---------------- #
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "message": "Invalid Email"
        }), 401

    if bcrypt.checkpw(
        password.encode("utf-8"),
        user.password.encode("utf-8")
    ):

        return jsonify({
            "message": "Login Successful",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": user.phone
            }
        }), 200

    return jsonify({
        "message": "Invalid Password"
    }), 401


# ---------------- UPDATE PROFILE ---------------- #
@auth_bp.route("/profile/<int:user_id>", methods=["PUT"])
def update_profile(user_id):

    try:

        data = request.get_json()

        user = User.query.filter_by(id=user_id).first()

        if not user:
            return jsonify({
                "message": "User not found"
            }), 404

        existing = User.query.filter(
            User.email == data["email"],
            User.id != user_id
        ).first()

        if existing:
            return jsonify({
                "message": "Email already exists"
            }), 400

        user.name = data["name"]
        user.email = data["email"]
        user.phone = data["phone"]

        db.session.commit()

        return jsonify({
            "message": "Profile Updated Successfully",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": user.phone
            }
        }), 200

    except Exception as e:
        db.session.rollback()
        print(e)

        return jsonify({
            "message": str(e)
        }), 500