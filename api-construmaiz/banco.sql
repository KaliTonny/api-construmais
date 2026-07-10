CREATE DATABASE construmais;

USE construmais;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100),
    marca VARCHAR(100),
    preco DECIMAL(10,2),
    quantidade INT,
    descricao TEXT
);