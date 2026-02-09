import express from 'express';
import ProdutosRouter from "./routes/ProdutosRouter.js";
import CategoriasRouter from './routes/categoriasroutes.js'

const app = express();
app.use(express.json())

app.use("/produtos", ProdutosRouter)
app.use("/categorias", CategoriasRouter)

export default app;