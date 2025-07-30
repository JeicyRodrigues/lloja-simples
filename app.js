import express from 'express'
import routesLivros from './routes/livroRoutes.js'

const app = express()
app.use(express.json())

const port = 8081


// Montagem da Rota Livro 

app.use('/lojasimples', routesLivros);



app.listen(port, () => {
   console.log(`Escutando a porta ${port}`)
})


