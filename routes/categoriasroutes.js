import express from 'express';
import categoriasControllers from "../controllers/categoriasControllers.js"

const router = express.Router();

router.get("/:id", categoriasControllers.listar_id)


export default router;