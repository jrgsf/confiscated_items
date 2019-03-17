from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class FormEntry(db.Model):
    """Table of Form"""

    __tablename__ = "formentries"

    form_entry_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.today)
    itemName = db.Column(db.String(25), nullable=False)
    itemDescription = db.Column(db.String(250), nullable=True)

def connect_to_db(app):
    """Connect the database to our Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///formentries' ## rename jrg
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
    print("Connected to DB.")
