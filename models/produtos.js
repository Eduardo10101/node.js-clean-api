import pool from "../database/connection.js";

async function getALLProducts(){
    const [rows] = await pool.query(`SELECT * FROM produtos`);
    return rows;
}

async function getALLid(id){
    const [rows] = await pool.query(`SELECT * FROM produtos
INNER JOIN categorias ON produtos.id_categorias = categorias.id
WHERE categorias.id = ?`, [id]);
    return rows;
}

 async function creatProduct(produto) {
    const {nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categorias} = produto;

    const [result] = await pool.query(`INSERT INTO produtos(nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categorias) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categorias])
    return result.insertId
 }


async function update(id, produto) {
    const {nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categorias} = produto;

    const [result] = await pool.query(`UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade_estoque = ?, status = ?, destaque = ?, marca = ?, modelo = ?, garantia_meses = ?, id_categorias = ? WHERE id = ?`, [nome, descricao, preco, quantidade_estoque, status, destaque, marca, modelo, garantia_meses, id_categorias, id] ) 

    return result;
}

async function delUser(id) {

    const [result] = await pool.query(`DELETE FROM produtos WHERE id = ?`, [id] ) 

    return result.affectedRows;
}

export default {getALLid,getALLProducts, creatProduct, update, delUser};