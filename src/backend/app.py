from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

robot_data = {
    "voltage": 0,
    "temperature": 0,
    "snow_thickness": 0,
    "acceleration": {"x": 0, "y": 0, "z": 0},
    "yards_cleared": 0,
    "sidewalk_ft": 0,
    "snow_removed": 0,
}

@app.route('/update', methods=['POST'])
def update_data():
    global robot_data
    data = request.json
    robot_data.update(data)
    return jsonify({"message": "Data updated"}), 200

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(robot_data)

if __name__ == '__main__':
    app.run(debug=True)
