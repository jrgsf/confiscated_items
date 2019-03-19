from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class User(db.Model):
    "table of users"
    __tablename__ = "users"
    id = db.Column(db.Integer,
                   autoincrement=True,
                   primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    is_admin = db.Column(db.Boolean, default=False)


class Entry(db.Model):
    """table of form"""

    __tablename__ = "entries"

    entry_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    item_name = db.Column(db.String(25), nullable=False)
    item_description = db.Column(db.String(250), nullable=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.today)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    destroyed = db.Column(db.Boolean, nullable=True, default=False)
    taken = db.Column(db.Boolean, nullable=True, default=False)
    image = db.Column(db.LargeBinary, nullable=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        'owner.owner_id'), nullable=True)
    user_id = db.Column(db.String(50), db.ForeignKey(
        'users.public_id'), nullable=True)
    users = db.relationship(
        'User', cascade="save-update, merge")
    owners = db.relationship(
        'Owner', cascade="save-update, merge")


class Owner(db.Model):
    "Table of item owners"
    owner_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=True)
    phone_number = db.Column(db.String(50), nullable=True)
    email = db.Column(db.String(100), nullable=True)


def connect_to_db(app):
    """Connect the database to our Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///entries'  # rename jrg
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
    print("Connected to DB.")
