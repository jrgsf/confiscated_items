from flask import Flask, request, jsonify
from model import AllItems, connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'

###### made a ROUTE (actually gets that data for doing something with)
###### 2 main methods: GET and POST (to/from server)
######### (there's also DELETE and PUT, but POST does those too)
######### defaults to GET... but better to always specify
######### if you try to POST but don't say to, will get 405 error
@app.route("/api/add-entry", methods=['POST'])
### ^^^ defines route name
@cross_origin()
#### ^^^ need this because 2 servers: front end and back end
def add_entry():
    data = request.get_json()
    ## ^^^ creates dictionary for incoming strings or whatnot
    item_name=data.get("itemName")
    ## creates entery in dictionary {item_name, "actual name"}
    print(data)
    item_description=data.get("itemDescription")
    new_entry=AllItems(item_name=item_name, item_description=item_description)
    db.session.add(new_entry)
    db.session.commit()
    return "Done added it yeah"


@app.route("/api/entries", methods=['GET'])
### ^^^ defines route name
@cross_origin()
#### ^^^ need this because 2 servers: front end and back end
def view_entries():
    entries = AllItems.query.all()
    #### ^^^ from class name in model.py, returns list of db objects
    list_of_json_objects_from_db = []
    for e in entries:
        dic_of_items = {
            "formEntryID": e.form_entry_id,
            "date": e.date,
            "itemName": e.item_name,
            "itemDescription": e.item_description
        } ### ^^^ these name strings are same as in db, but these are new!!!
        list_of_json_objects_from_db.append(dic_of_items)
        #### cycles through table, creating a dic for each row: "columnName", value
        ### .... and makes it not-quite-json....:
    return jsonify(list_of_json_objects_from_db)


if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
