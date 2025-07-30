import express from 'express';
import { getLivros } from '../controllers/livroController.js';



const routes = express.Router();

routes.get('/', getLivros);



export default routes;