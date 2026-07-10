const conexao = require("../conexao");

// Listar todos os produtos
exports.listarProdutos = (req, res) => {

    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: "Erro ao listar produtos"
            });
        }

        res.json(resultados);

    });

};

// Buscar produto por ID
exports.buscarProduto = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM produtos WHERE id = ?";

    conexao.query(sql, [id], (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: "Erro ao buscar produto"
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(resultados[0]);

    });

};

// Cadastrar produto
exports.cadastrarProduto = (req, res) => {

    const {
        nome,
        categoria,
        marca,
        preco,
        quantidade,
        descricao
    } = req.body;

    const sql = `
        INSERT INTO produtos
        (nome, categoria, marca, preco, quantidade, descricao)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(sql,
        [nome, categoria, marca, preco, quantidade, descricao],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    erro: "Erro ao cadastrar produto"
                });
            }

            res.status(201).json({
                mensagem: "Produto cadastrado com sucesso!",
                id: resultado.insertId
            });

        });

};

// Atualizar produto
exports.atualizarProduto = (req, res) => {

    const { id } = req.params;

    const {
        nome,
        categoria,
        marca,
        preco,
        quantidade,
        descricao
    } = req.body;

    const sql = `
        UPDATE produtos
        SET
        nome = ?,
        categoria = ?,
        marca = ?,
        preco = ?,
        quantidade = ?,
        descricao = ?
        WHERE id = ?
    `;

    conexao.query(sql,
        [nome, categoria, marca, preco, quantidade, descricao, id],
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    erro: "Erro ao atualizar produto"
                });
            }

            res.json({
                mensagem: "Produto atualizado com sucesso!"
            });

        });

};

// Excluir produto
exports.excluirProduto = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM produtos WHERE id = ?";

    conexao.query(sql, [id], (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: "Erro ao excluir produto"
            });
        }

        res.json({
            mensagem: "Produto excluído com sucesso!"
        });

    });

};