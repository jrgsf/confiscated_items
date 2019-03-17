from flask import Flask, request
from model import FormEntry, connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'

# testing_options_dir = "testing-options"
@app.route("/api/add-entry", methods=['POST'])
def add_entry():
    data = request.get_json()
    item_name=data.get("itemName")
    print(data)
    item_description=data.get("itemDescription")
    new_entry=FormEntry(item_name=item_name, item_description=item_description)
    db.session.add(new_entry)
    db.session.commit()
    return "Done added it yeah"

if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
