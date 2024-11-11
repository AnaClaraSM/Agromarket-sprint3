import random
import oracledb
from datetime import datetime


dsn = oracledb.makedsn('oracle.fiap.com.br', 1521, service_name='ORCL')  

def get_connection():
    try:
        connection = oracledb.connect(user='rm557575', password='fiap24', dsn=dsn)
        print("Conexão estabelecida com sucesso!")
        return connection
    except oracledb.DatabaseError as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        exit(1)  
        return None

def inserir_usuario(nome, email, password, funcao):
    connection = get_connection()
    try:
        with connection.cursor() as cursor:  # Usando o contexto para garantir que o cursor seja fechado
            cursor.execute("""
                INSERT INTO usuario (id_usuario, nome, email, password, funcao)
                VALUES (SEQ_USUARIO.NEXTVAL, :nome, :email, :password, :funcao)
            """, nome=nome, email=email, password=password, funcao=funcao)
        connection.commit()
        print(f"Usuário {nome} inserido com sucesso!")
    except oracledb.DatabaseError as e:
        print(f"Erro ao inserir usuário: {e}")
        connection.rollback()
    finally:
        if connection:
            connection.close()

def inserir_produtor(email_usuario, cpf, cnpj, data_nascimento, cep, cidade, estado, pais, telefone, nome_fantasia, tipo_producao, tamanho_propriedade):
    connection = get_connection()
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT id_usuario FROM usuario WHERE email = :email", email=email_usuario)
            id_usuario = cursor.fetchone()
            if id_usuario is None:
                print(f"Usuário com email {email_usuario} não encontrado!")
                return
            id_usuario = id_usuario[0]

            cursor.execute("""
                INSERT INTO produtor (id_produtor, id_usuario, cpf, cnpj, data_nascimento, cep, cidade, estado, pais, telefone, nome_fantasia, tipo_producao, tamanho_propriedade)
                VALUES (SEQ_PRODUTOR.NEXTVAL, :id_usuario, :cpf, :cnpj, :data_nascimento, :cep, :cidade, :estado, :pais, :telefone, :nome_fantasia, :tipo_producao, :tamanho_propriedade)
            """, id_usuario=id_usuario, cpf=cpf, cnpj=cnpj, data_nascimento=data_nascimento, cep=cep, cidade=cidade,
                estado=estado, pais=pais, telefone=telefone, nome_fantasia=nome_fantasia, tipo_producao=tipo_producao,
                tamanho_propriedade=tamanho_propriedade)
        connection.commit()
        print(f"Produtor {nome_fantasia} inserido com sucesso!")
    except oracledb.DatabaseError as e:
        print(f"Erro ao inserir produtor: {e}")
        connection.rollback()
    finally:
        if connection:
            connection.close()

# Funções para gerar CPF e CNPJ aleatórios
def gerar_cpf_aleatorio():
    cpf = ''.join([str(random.randint(0, 9)) for _ in range(9)])
    return f"{cpf[:3]}.{cpf[3:6]}.{cpf[6:8]}-{cpf[8:]}"

def gerar_cnpj_aleatorio():
    # Função para gerar um CNPJ aleatório válido
    cnpj = ''.join([str(random.randint(0, 9)) for _ in range(8)])
    return f"{cnpj[:2]}.{cnpj[2:5]}.{cnpj[5:8]}/0001-{random.randint(0, 99):02}"

# Inserir 5 usuários e produtores aleatórios
for i in range(1, 6):  # Inserir 5 usuários e produtores como exemplo
    nome_usuario = f"usuario{i}"
    email_usuario = f"usuario{i}_{int(datetime.now().timestamp())}@email.com"  # Email único
    password_usuario = f"senha{i}_segura"
    funcao_usuario = 'produtor' if i % 2 == 0 else 'consumidor'  # Alterna entre 'produtor' e 'consumidor'
    
    inserir_usuario(nome_usuario, email_usuario, password_usuario, funcao_usuario)
    
    # Gerar CPF e CNPJ aleatórios para cada inserção de produtor
    cpf_produtor = gerar_cpf_aleatorio()
    cnpj_produtor = gerar_cnpj_aleatorio()
    
    nome_fantasia_produtor = f"Fazenda {i}"
    data_nascimento_produtor = datetime(1985, 5, 15)
    cep_produtor = f"12345-678"
    cidade_produtor = f"Cidade {i}"
    estado_produtor = 'SP'
    pais_produtor = 'Brasil'
    telefone_produtor = f"(11) 98765-4{i:03}"
    tipo_producao_produtor = f"Tipo de Produção {i}"
    tamanho_propriedade_produtor = 100 + (i * 10)  # Tamanho da propriedade (em hectares)
    
    inserir_produtor(email_usuario, cpf_produtor, cnpj_produtor, data_nascimento_produtor, cep_produtor,
                     cidade_produtor, estado_produtor, pais_produtor, telefone_produtor, nome_fantasia_produtor,
                     tipo_producao_produtor, tamanho_propriedade_produtor)
