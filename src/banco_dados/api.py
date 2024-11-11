from flask import Flask, request, jsonify
from flask_cors import CORS
import db

app = Flask(__name__)
CORS(app)

@app.route('/usuarios', methods=['POST'])
def criar_usuario():
    data = request.json
    try:
        db.inserir_usuario(data['nome'], data['email'], data['password'], data['funcao'])
        return jsonify({"message": f"Usuário {data['nome']} criado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/produtores', methods=['POST'])
def criar_produtor():
    data = request.json
    try:
        db.inserir_produtor(
            data['email_usuario'], data['cpf'], data['cnpj'], 
            data['data_nascimento'], data['cep'], data['cidade'], 
            data['estado'], data['pais'], data['telefone'], 
            data['nome_fantasia'], data['tipo_producao'], 
            data['tamanho_propriedade']
        )
        return jsonify({"message": f"Produtor {data['nome_fantasia']} criado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    try:
        connection = db.get_connection()
        with connection.cursor() as cursor:
            cursor.execute("SELECT id_usuario, nome, email, funcao FROM usuario")
            usuarios = cursor.fetchall()
            
            usuarios_lista = [
                {
                    "id_usuario": usuario[0],
                    "nome": usuario[1],
                    "email": usuario[2],
                    "funcao": usuario[3]
                }
                for usuario in usuarios
            ]
        
        return jsonify(usuarios_lista), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/produtores', methods=['GET'])
def listar_produtores():
    try:
        connection = db.get_connection()
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT p.id_produtor, p.cpf, p.cnpj, u.nome, p.nome_fantasia, p.tipo_producao 
                FROM produtor p
                JOIN usuario u ON p.id_usuario = u.id_usuario
            """)
            produtores = cursor.fetchall()
            
            produtores_lista = [
                {
                    "id_produtor": produtor[0],
                    "cpf": produtor[1],
                    "cnpj": produtor[2],
                    "nome": produtor[3],
                    "nome_fantasia": produtor[4],
                    "tipo_producao": produtor[5]
                }
                for produtor in produtores
            ]
        
        return jsonify(produtores_lista), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)