import fs from 'fs'
import livros from "../data/livros.json"

function getTodosOsLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
}


export {getTodosOsLivros}