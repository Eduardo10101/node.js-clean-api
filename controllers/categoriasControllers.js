import categorias from '../models/categorias_models.js'
async function listar_id(req, res) {
    try {
        const {id} = req.params;
        
        const listando = await categorias.getcategorias(id)
        return res.json(listando)
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao listar'})
        
    }
}

async function listar_id_categorias(req, res) {
    try {
        const {id} = req.params;
        
        const listando = await categorias.getALLcategorias(id)
        return res.json(listando)
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao listar'})
        
    }
}

async function criar(req, res) {
    try {
        const {nome, descricao} = req.body;
        const categoria = {nome, descricao}

        await categorias.creatCategorias(categoria)
        res.status(201).json({
            Mensagem: 'categoria cadastrado'
        })
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao criar categoria'})
    }
}

async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const produto = req.body;

        await categorias.updateCategorias(id, produto)
        res.status(200).json('categoria atualizada')
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao atualizar categoria'})
        
    }
}

async function deletarCategoria(req, res) {
    try {
        const {id} = req.params;
         
                await categorias.delCategorias(id)
                res.status(201).json({
                    Mensagem: ' Categoria deletada'
                })
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao deletar'})
    }
}


export default {listar_id, deletarCategoria, criar, atualizar, listar_id_categorias}