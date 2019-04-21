from flask import Flask, request, jsonify
from model import Entry, User, Owner, connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
import json
import base64

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'


# @app.route("/api/add-entry", methods=['POST'])
# @cross_origin()
# def add_entry():
#     file = request.files
#     print("got file", file)
#     image = file.get('0')
#     data = file['document'].read()
#     data = json.loads(data)
#     item_name = data.get("itemName")
#     item_description = data.get("itemDescription")
#     location = data.get("location")
#     latitude = location["latitude"]
#     longitude = location["longitude"]
#     if image:
#         image = image.read()
#         new_entry = Entry(item_name=item_name,
#                           item_description=item_description, latitude=latitude, longitude=longitude, image=image)
#     else:
#         new_entry = Entry(item_name=item_name,
#                           item_description=item_description, latitude=latitude, longitude=longitude)
#     db.session.add(new_entry)
#     db.session.commit()
#     return jsonify({"response": "success"})


@app.route("/api/entries", methods=['POST'])
@cross_origin()
def add_entry():
    data = request.get_json()
    print(data)
    # new_entry = Entry(item_name=item_name,
    #                       item_description=item_description, latitude=latitude, longitude=longitude)
    # db.session.add(new_entry)
    # db.session.commit()
    return jsonify({"response": "success"})


@app.route("/api/entries", methods=['GET'])
@cross_origin()
def get_entries():
    entries = Entry.query.all()

    items = []
    for entry in entries:
        item = {
            "entryId": entry.entry_id,
            "item": entry.item_name,
            "description": entry.item_description,
            "date": entry.date.strftime("%m/%d/%Y"),
            "latitude": entry.latitude,
            "longitude": entry.longitude
        }

        if entry.image:
            item['image'] = base64.encodestring(entry.image).decode('ascii')
        items.append(item)
    return jsonify(items)


@app.route("/api/delete-entry", methods=['POST'])
def delete_entry():
    entry_id = request.get_json()
    print("entry_id", entry_id)
    entry = Entry.query.filter_by(
        entry_id=entry_id).first()
    print("found entry", entry)
    db.session.delete(entry)
    db.session.commit()
    return jsonify({"response": "success"})


if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
