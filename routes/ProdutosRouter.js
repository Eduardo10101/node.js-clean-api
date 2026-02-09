import express from 'express';
import ProdutoControllers from "../controllers/ProdutosControllers.js";

const router = express.Router();

router.get("/", ProdutoControllers.index)
router.get("/:id", ProdutoControllers.listar_produtos)
router.post('/', ProdutoControllers.store)
router.put('/:id', ProdutoControllers.atualizar)
router.delete('/:id', ProdutoControllers.deletando)


export default router;