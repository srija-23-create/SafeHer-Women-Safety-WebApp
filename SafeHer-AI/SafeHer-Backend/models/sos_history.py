from database.db import db
from datetime import datetime


class SOSHistory(db.Model):
    __tablename__ = "sos_history"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    latitude = db.Column(db.String(50))
    longitude = db.Column(db.String(50))

    status = db.Column(
        db.String(50),
        default="Triggered"
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )