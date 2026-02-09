import express from 'express';
import categoriasControllers from "../controllers/categoriasControllers.js"

const router = express.Router();

router.get("/:id", categoriasControllers.listar_id)
router.put('/:id', categoriasControllers.atualizar)
router.post('/', categoriasControllers.criar)
router.delete('/:id', categoriasControllers.deletarCategoria)

export default router;