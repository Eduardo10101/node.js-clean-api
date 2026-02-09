import express from 'express';
import ProdutosRouter from "./routes/ProdutosRouter.js";
import categoriasControllers from './routes/categoriasroutes.js'

const app = express();
app.use(express.json())

app.use("/produtos", ProdutosRouter)
app.use("/categorias", categoriasControllers)

export default app;