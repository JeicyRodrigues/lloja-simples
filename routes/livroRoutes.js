import express from 'express';
import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../controllers/livroController.js';



const router = express.Router();

router.delete("/:id", deletaLivro)
router.patch("/:id", patchLivro);
router.post('/', postLivro);
router.get('/', getLivros);
router.get('/:id', getLivro);

export default router;