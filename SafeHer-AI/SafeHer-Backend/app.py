from flask import Flask
from config import Config
from database.db import db
from models.user import User
from routes.auth import auth_bp
from models.emergency_contact import EmergencyContact
from routes.contacts import contacts_bp
from models.sos_history import SOSHistory
from routes.sos import sos_bp
from routes.location import location_bp
from routes.chatbot import chatbot_bp
from routes.threat import threat_bp
from routes.voice_sos import voice_bp
from routes.dashboard import dashboard_bp
from flask_cors import CORS
from models.emergency_contact import EmergencyContact
import webbrowser
from threading import Timer


app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

db.init_app(app)
app.register_blueprint(auth_bp)
app.register_blueprint(contacts_bp)
app.register_blueprint(sos_bp)
app.register_blueprint(location_bp)
app.register_blueprint(chatbot_bp)
app.register_blueprint(threat_bp)
app.register_blueprint(voice_bp)
app.register_blueprint(dashboard_bp)

@app.route("/")
def home():
    return "SafeHer Backend Running"

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
def open_browser():
    webbrowser.open("http://127.0.0.1:5000")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    Timer(1, open_browser).start()
    app.run(debug=True)
