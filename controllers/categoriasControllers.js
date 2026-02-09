import categorias from '../models/categorias_models.js'
async function listar_id(req, res) {
    try {
        const {id} = req.params;
        
        const listando = await categorias.getALLcategorias(id)
        return res.json(listando)
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao listar'})
        
    }
}

export default {listar_id}