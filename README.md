# API ConstruMais

API REST desenvolvida em **Node.js**, **Express** e **MySQL** para o gerenciamento de produtos de uma loja de materiais de construção.

O projeto foi desenvolvido como atividade da **Mostra STEAM - SENAI**, com o objetivo de aplicar conceitos de desenvolvimento Back-end, banco de dados e APIs REST.

---

# Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- MySQL
- MySQL2
- Dotenv
- CORS
- Git
- GitHub
- Postman

---

# Estrutura do Projeto

```
api-construmais/

│
├── node_modules/
├── controllers/
│   └── produtoController.js
│
├── routes/
│   └── produtos.js
│
├── .env
├── .env.example
├── app.js
├── conexao.js
├── banco.sql
├── package.json
├── package-lock.json
└── README.md
```

---

# Banco de Dados

Banco:

```
construmais
```

Tabela:

```
produtos
```

Campos da tabela:

| Campo | Tipo |
|--------|------|
| id | INT |
| nome | VARCHAR(100) |
| categoria | VARCHAR(100) |
| marca | VARCHAR(100) |
| preco | DECIMAL(10,2) |
| quantidade | INT |
| descricao | TEXT |

---

# Instalação

Clone o repositório:

```bash
git clone <link-do-repositorio>
```

Entre na pasta:

```bash
cd api-construmais
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234
DB_NAME=construmais
PORT=3001
```

Execute a aplicação:

```bash
npm start
```

Servidor:

```
http://localhost:3001
```

---

# Endpoints

## Listar Produtos

```
GET /produtos
```

Retorna todos os produtos cadastrados.

---

## Buscar Produto

```
GET /produtos/:id
```

Retorna um produto específico.

---

## Cadastrar Produto

```
POST /produtos
```

Exemplo:

```json
{
    "nome": "Tinta Acrílica Branca 18L",
    "categoria": "Tintas",
    "marca": "Suvinil",
    "preco": 289.90,
    "quantidade": 40,
    "descricao": "Tinta acrílica para ambientes internos e externos."
}
```

---

## Atualizar Produto

```
PUT /produtos/:id
```

Atualiza um produto existente.

---

## Excluir Produto

```
DELETE /produtos/:id
```

Remove um produto do banco de dados.

---

# Funcionalidades

- Cadastro de produtos
- Listagem de produtos
- Busca por ID
- Atualização de produtos
- Exclusão de produtos
- Integração com banco MySQL
- Respostas em formato JSON

---

# Testes

Todos os endpoints foram testados utilizando o **Postman**.

Foram realizados testes de:

- GET
- GET por ID
- POST
- PUT
- DELETE

---

# Melhorias Futuras

- Cadastro de clientes
- Cadastro de fornecedores
- Controle de estoque automático
- Sistema de autenticação de usuários
- Upload de imagens dos produtos
- Pesquisa por categoria
- Pesquisa por marca
- Relatórios em PDF
- Histórico de vendas
- Dashboard administrativo

---

# Desenvolvedor

Desenvolvido por:

**Etony Guedes e Geovanna Almeida**

2026
