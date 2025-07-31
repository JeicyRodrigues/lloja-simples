import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } from "../models/livroModel.js";

export const getLivros = async (req, res) => {
    try {
        const livros = await getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getLivro = async (req, res) => {
    try {
        const id = req.params.id;
        if (id && !isNaN(id)) {
            const livro = await getLivroPorId(Number(id));
            if (livro) {
                res.send(livro);
            } else {
                res.status(404).send("Livro não encontrado");
            }
        } else {
            res.status(422).send("ID inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const postLivro = async (req, res) => {
    try {
        const livroNovo = req.body;
        if (req.body.nome) {
            await insereLivro(livroNovo);
            res.status(201).json(livroNovo);
        } else {
            res.status(422).send("O Campo nome é obrigatório");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const patchLivro = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const body = req.body;
        if (id && Number(id)) {
            await modificaLivro(body, id);
            res.send("Livro modificado com sucesso");
        } else {
            res.status(422).send("Id inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deletaLivro = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (id && Number(id)) {
            await deletaLivroPorId(id);
            res.send("livro deletado com sucesso");
        } else {
            res.status(422).send("Id inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
