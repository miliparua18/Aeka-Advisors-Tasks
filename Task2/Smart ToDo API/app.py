from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
from werkzeug.security import generate_password_hash, check_password_hash
from bson import ObjectId
from db import mongo

app = Flask(__name__)

# Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/smart_todo_db"
app.config["JWT_SECRET_KEY"] = "super-secret-key"

mongo.init_app(app)
jwt = JWTManager(app)

users = mongo.db.users
tasks = mongo.db.tasks

# ------------------ AUTH ROUTES ------------------

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if users.find_one({"username": username}):
        return jsonify({"msg": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    users.insert_one({
        "username": username,
        "password": hashed_pw
    })

    return jsonify({"msg": "User created successfully"}), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = users.find_one({"username": data.get("username")})

    if not user or not check_password_hash(user["password"], data.get("password")):
        return jsonify({"msg": "Invalid credentials"}), 401

    token = create_access_token(identity=str(user["_id"]))
    return jsonify(access_token=token)


# ------------------ TASK ROUTES ------------------

@app.route("/tasks", methods=["POST"])
@jwt_required()
def create_task():
    user_id = get_jwt_identity()
    data = request.json

    task = {
        "title": data.get("title"),
        "description": data.get("description", ""),
        "completed": False,
        "user_id": user_id
    }

    tasks.insert_one(task)
    return jsonify({"msg": "Task created"}), 201


@app.route("/tasks", methods=["GET"])
@jwt_required()
def get_tasks():
    user_id = get_jwt_identity()
    user_tasks = []

    for task in tasks.find({"user_id": user_id}):
        task["_id"] = str(task["_id"])
        user_tasks.append(task)

    return jsonify(user_tasks)


@app.route("/tasks/<task_id>", methods=["PUT"])
@jwt_required()
def update_task(task_id):
    data = request.json

    tasks.update_one(
        {"_id": ObjectId(task_id)},
        {"$set": data}
    )

    return jsonify({"msg": "Task updated"})


@app.route("/tasks/<task_id>", methods=["DELETE"])
@jwt_required()
def delete_task(task_id):
    tasks.delete_one({"_id": ObjectId(task_id)})
    return jsonify({"msg": "Task deleted"})


# ------------------ RUN SERVER ------------------

if __name__ == "__main__":
    app.run(debug=True)




