const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtoController");

// GET
router.get("/", produtoController.listarProdutos);

// GET por ID
router.get("/:id", produtoController.buscarProduto);

// POST
router.post("/", produtoController.cadastrarProduto);

// PUT
router.put("/:id", produtoController.atualizarProduto);

// DELETE
router.delete("/:id", produtoController.excluirProduto);

module.exports = router;