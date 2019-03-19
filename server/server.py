from flask import Flask, request, jsonify
from model import Entry, User, Owner, connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'

# testing_options_dir = "testing-options"
@app.route("/api/add-entry", methods=['POST'])
@cross_origin()
def add_entry():
    data = request.get_json()
    item_name = data.get("itemName")
    item_description = data.get("itemDescription")
    latitude = data.get("latitude")
    longitude = data.get("longitude")
    new_entry = Entry(item_name=item_name,
                      item_description=item_description, latitude=latitude, longitude=longitude)
    db.session.add(new_entry)
    db.session.commit()
    return "Done added it yeah"


@app.route("/api/entries", methods=['GET'])
@cross_origin()
def get_entries():
    entries = Entry.query.all()
    print(entries)
    items = []
    for entry in entries:
        item = {
            "item": entry.item_name,
            "description": entry.item_description,
            "date": entry.date.strftime("%m/%d/%Y"),
            "latitude": entry.latitude,
            "longitude": entry.longitude
        }
        items.append(item)
    print("items", items)
    return jsonify(items)


if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
