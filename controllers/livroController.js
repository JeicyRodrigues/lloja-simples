import { getTodosOsLivros } from "../models/livroModel.js";



export const getLivros = (req, res) => {
    try{
        const livros = getTodosOsLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.messge);
    }


};