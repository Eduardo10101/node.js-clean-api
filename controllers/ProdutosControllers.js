
import Produto from "../models/produtos.js";

async function index(req, res){
    try{
        const produtos = await Produto.getALLProducts();
        return res.json(produtos)
    }   catch(error) {
        console.log(error);
        return res.status(500).json({Erro: 'Erro ao buscar produtos'})
    }
}

async function listar_produtos(req, res) {
    try {
        const {id} = req.params;
        
        const listando = await Produto.getALLid(id)
        return res.json(listando)
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao listar'})
        
    }
}


async function store(req, res) {
    try {
        const produto = req.body;

        await Produto.creatProduct(produto)
        res.status(201).json({
            Mensagem: 'Produto cadastrado'
        })
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao criar produtos'})
    }
}

async function atulizar(req, res) {
    try {
        const { id } = req.params;
        const produto = req.body;

        await Produto.update(id, produto)
        res.status(200).json('User atualizado')
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao atualizar produtos'})
        
    }
}

async function listar_id(req, res) {
    try {
        const { id } = req.params;

        const listar_id = await Produto.getALLcategorias(id)
        return res.json(listar_id)
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao atualizar produtos'})
        
    }
}


async function deletando(req, res) {
    try {
        const { id } = req.params;

        await Produto.delUser(id)

        res.status(200).json({Mensagem: 'Produto deletado'})
    } catch (error) {
        return res.status(500).json({Erro: 'Erro ao deletar produtos'})
        
    }
}

export default {listar_produtos,index, store, atulizar, deletando, listar_id};