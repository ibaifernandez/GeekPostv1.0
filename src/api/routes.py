from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import json

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User doesn't exist"}), 404
    if email != user.email or password != user.password:
        return jsonify({"msg": "Incorrect email or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200


@api.route("/home", methods=["GET"])
@jwt_required()
def home():
    response_body = {
        "msg": "Hello, you are logged in",
    }
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@api.route("/signup", methods=["POST"])
def signup():
    body = json.loads(request.data)
    user = User.query.filter_by(email=body["email"]).first()

    if user:
        return jsonify({"msg": "User already exists"}), 403

    new_user = User(
        email = body["email"], 
        password = body["password"],
        first_name = body["first_name"])

    db.session.add(new_user)
    db.session.commit()

    userCreated = User.query.filter_by(email=body["email"]).first()

    access_token = create_access_token(identity=userCreated.id)
    return jsonify(access_token=access_token), 200


@api.route('/profile', methods=['DELETE'])
@jwt_required()
def delete_account():
    current_user = get_jwt_identity()
    user_query = User.query.filter_by(id=current_user).first()

    if user_query:
        db.session.delete(user_query)
        db.session.commit()
        return jsonify({"msg": "Your account has been deleted"}), 200
    
    if not user_query:
        return jsonify({"msg": "Not able to delete this account"}), 200


@api.route('/profile', methods=['PUT'])
@jwt_required()
def update_account():
    current_user = get_jwt_identity()
    body = json.loads(request.data)
    user_query = User.query.filter_by(id=current_user).first()

    if user_query is None:
        response_body = {"msg": "User doesn't exists"}
        return jsonify(response_body), 400    

    if "email" in body:
        user_query.email =  body["email"]
    if "password" in body:
        user_query.password =  body["password"]
    if "name" in body:
        user_query.name =  body["name"]
    if "last_name" in body:
        user_query.last_name =  body["last_namewebsite_url"]
    if "contact_data" in body:
        user_query.contact_data =  body["contact_data"]
    if "facebook_profile" in body:
        user_query.facebook_profile =  body["facebook_profile"]
    if "instagram_profile" in body:
        user_query.instagram_profile =  body["instagram_profile"]
    if "tiktok_profile" in body:
        user_query.instagram_profile =  body["tiktok_profile"]
    if "identity" in body:
        user_query.identity =  body["identity"]
    if "logo" in body:
        user_query.logo =  body["logo"]
    if "main_color" in body:
        user_query.main_color =  body["main_color"]
    if "secondary_color" in body:
        user_query.secondary_color =  body["secondary_color"]
    if "aux_color" in body:
        user_query.aux_color =  body["aux_color"]
    db.session.commit()
    return jsonify({"msg": "You information has been updated"}), 200


@api.route("/users", methods=["GET"])
def get_users():
    users_query = User.query.all()
    results = list(map(lambda user: user.serialize(), users_query))

    return jsonify(results), 200

@api.route('/profile', methods=['GET'])
@jwt_required()
def get_user_info():
    current_user = get_jwt_identity()
    user_query = User.query.filter_by(id=current_user).first()
    result = user_query.serialize()

    return jsonify(result), 200


# ROUTES FOR POST TABLE

@api.route('/infopost', methods=['GET'])
@jwt_required()
def get_info_post():
    current_user = get_jwt_identity()
    post_query = Post.query.filter_by(user_id=current_user).first()
    
    if post_query is None:
        return jsonify({"msg": "There are no Post for this user"}), 400
    result = post_query.serialize()
    return jsonify(result), 200


# ME

@api.route("/infopost", methods=["POST"])
@jwt_required()
def save_post_info():
    try:
        body = request.get_json()

        # Validación de entrada
        if not body:
            raise BadRequest("No se encontró ningún cuerpo en la solicitud")

        required_fields = ["identity", "main_text", "secondary_text", "price", "logo", "formality", "main_color", "secondary_color", "aux_color", "ratio", "contact_data"]
        missing_fields = [field for field in required_fields if field not in body]

        if missing_fields:
            raise BadRequest(f"Faltan campos obligatorios en la solicitud: {', '.join(missing_fields)}")

        if not isinstance(body["identity"], str) or not body["identity"].strip():
            raise BadRequest("La identidad debe ser una cadena no vacía")

        if not isinstance(body["main_text"], str) or not body["main_text"].strip():
            raise BadRequest("El texto principal debe ser una cadena no vacía")

        if not isinstance(body["secondary_text"], str) or not body["secondary_text"].strip():
            raise BadRequest("El texto secundario debe ser una cadena no vacía")

        if not isinstance(body["price"], str) or not body["price"].strip():
            raise BadRequest("El precio debe ser una cadena no vacía")

        if not isinstance(body["formality"], int) or body["formality"] not in [1, 2, 3]:
            raise BadRequest("La formalidad debe ser un número entero con valores 1, 2 o 3")

        if not isinstance(body["main_color"], str) or not body["main_color"].strip():
            raise BadRequest("El color principal debe ser una cadena no vacía")

        if not isinstance(body["secondary_color"], str) or not body["secondary_color"].strip():
            raise BadRequest("El color secundario debe ser una cadena no vacía")

        if not isinstance(body["aux_color"], str) or not body["aux_color"].strip():
            raise BadRequest("El color auxiliar debe ser una cadena no vacía")

        if not isinstance(body["ratio"], str) or body["ratio"].strip() not in ["square", "vertical"]:
            raise BadRequest("La proporción debe ser una cadena 'square' o 'vertical'")

        if not isinstance(body["contact_data"], str) or not body["contact_data"].strip():
            raise BadRequest("Los datos de contacto deben ser una cadena no vacía")

        current_user = get_jwt_identity()
        app.logger.info(f'El usuario autenticado es: {current_user}')

        new_post = Post(
            user_id=current_user,
            identity=body["identity"],
            main_text=body["main_text"],
            secondary_text=body["secondary_text"],
            price=body["price"],
            logo=body["logo"],
            formality=body["formality"],
            main_color=body["main_color"],
            secondary_color=body["secondary_color"],
            aux_color=body["aux_color"],
            ratio=body["ratio"],
            contact_data=body["contact_data"],
        )

        db.session.add(new_post)
        db.session.commit()

        # Devuelve la nueva entrada en la base de datos y la identidad del usuario autenticado
        return jsonify({
            "post": new_post.serialize(), "current_user": current_user}), 201

    except BadRequest as e:
    # Si hay un error de validación, devuelve un código 400 con el mensaje de error
        return jsonify({"error": str(e)}), 400

    except (jwt.exceptions.InvalidTokenError, jwt.exceptions.ExpiredSignatureError) as e:
    # Si hay un error de autenticación, devuelve un código 401 con el mensaje de error
        return jsonify({"error": "Token de autenticación inválido o caducado"}), 401

    except Exception as e:
    # Si hay cualquier otro error, se registra en la consola y se devuelve un código 500 con un mensaje genérico de error
        app.logger.exception(e)
        return jsonify({"error": "Ocurrió un error inesperado en el servidor"}), 500