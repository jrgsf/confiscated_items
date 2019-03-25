from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class AllItems(db.Model):
    """Table of Form"""

    __tablename__ = "all_items"

    form_entry_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.today)
    item_name = db.Column(db.String(25), nullable=False)
    item_description = db.Column(db.String(2500), nullable=True)

###  ^^^ needs to correspond to this line from server.py:
###     new_entry=AllItems(item_name=item_name, item_description=item_description)

def connect_to_db(app):
    """Connect the database to our Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///formentries' ## rename jrg
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
    print("Connected to DB.")  ### was here. Part of hackbright's boilerplate
