CREATE TABLE usuario (
    id_usuario NUMBER PRIMARY KEY,
    nome VARCHAR2(100) NOT NULL,
    email VARCHAR2(100) UNIQUE NOT NULL,
    password VARCHAR2(255) NOT NULL,
    funcao VARCHAR2(50) CHECK (funcao IN ('consumidor', 'produtor')) NOT NULL
);

CREATE SEQUENCE seq_usuario
START WITH 1
INCREMENT BY 1
NOCACHE
NOCYCLE;

CREATE TABLE produtor (
    id_produtor NUMBER PRIMARY KEY,
    id_usuario NUMBER,
    cpf VARCHAR2(14) UNIQUE,
    cnpj VARCHAR2(18) UNIQUE,
    data_nascimento DATE,
    cep VARCHAR2(10),
    cidade VARCHAR2(100),
    estado VARCHAR2(2),
    pais VARCHAR2(100),
    telefone VARCHAR2(15),
    nome_fantasia VARCHAR2(255),
    tipo_producao VARCHAR2(100),
    tamanho_propriedade NUMBER(10, 2),
    CONSTRAINT fk_produtor_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuario) ON DELETE CASCADE
);


CREATE SEQUENCE seq_produtor
START WITH 1
INCREMENT BY 1;