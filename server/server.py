from flask import Flask, request, jsonify
from model import FormEntry, connect_to_db, db
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
    print("hit server route")
    data = request.get_json()
    print(data)
    item_name = data.get("itemName")
    item_description = data.get("itemDescription")
    new_entry = FormEntry(item_name=item_name,
                          item_description=item_description)
    db.session.add(new_entry)
    db.session.commit()
    return "Done added it yeah"


@app.route("/api/entries", methods=['GET'])
@cross_origin()
def get_entries():
    entries = FormEntry.query.all()
    print(entries)
    items = []
    for entry in entries:
        item = {
            "item": entry.item_name,
            "description": entry.item_description
        }
        items.append(item)
    print("items", items)
    return jsonify(items)


if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
