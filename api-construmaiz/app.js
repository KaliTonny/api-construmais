require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const produtoRoutes = require("./routes/produtos");
app.use("/produtos", produtoRoutes);

// Página inicial
app.get("/", (req, res) => {
    res.status(200).json({
        api: "ConstruMais API",
        versao: "1.0.0",
        empresa: "ConstruMais Materiais de Construção",
        status: "Online",
        desenvolvidaEm: "Node.js + Express + MySQL",
        endpoints: {
            listar: "GET /produtos",
            buscar: "GET /produtos/:id",
            cadastrar: "POST /produtos",
            atualizar: "PUT /produtos/:id",
            excluir: "DELETE /produtos/:id"
        }
    });
});

// Rota não encontrada
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("=======================================");
    console.log("🚀 API ConstruMais iniciada com sucesso!");
    console.log(`📡 Servidor: http://localhost:${PORT}`);
    console.log(`📦 Produtos: http://localhost:${PORT}/produtos`);
    console.log("=======================================");
});