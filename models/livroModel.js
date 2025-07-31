import fs from 'fs/promises';  
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, '../data/livros.json');

async function getTodosLivros() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        return [];
    }
}

async function getLivroPorId(id) {
    try {
        const livros = await getTodosLivros();
        return livros.find(livro => livro.id === id) || null;
    } catch (error) {
        console.error('Erro ao filtrar o livro:', error);
        return null;
    }
}

async function insereLivro(livroNovo) {
    try {
        const listaDeLivros = await getTodosLivros();
        const novaListaDeLivros = [...listaDeLivros, livroNovo];
        await fs.writeFile(filePath, JSON.stringify(novaListaDeLivros, null, 2));
    } catch (error) {
        console.error('Erro ao inserir livro:', error);
    }
}

async function modificaLivro(modificacoes, id) {
    try {
        let livrosAtuais = await getTodosLivros();
        const livro = livrosAtuais.find(livro => livro.id === id);
        if (livro) {
            const conteudoMudado = { ...livro, ...modificacoes };
            const livrosAtualizados = livrosAtuais.map(livro =>
                livro.id === id ? conteudoMudado : livro
            );
            await fs.writeFile(filePath, JSON.stringify(livrosAtualizados, null, 2));
        }
    } catch (error) {
        console.error('Erro ao modificar livro:', error);
    }
}

async function deletaLivroPorId(id) {
    try {
        const livros = await getTodosLivros();
        const livrosFiltrados = livros.filter(livro => livro.id !== id);
        await fs.writeFile(filePath, JSON.stringify(livrosFiltrados, null, 2));
    } catch (error) {
        console.error('Erro ao deletar livro:', error);
    }
}

export { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId };
