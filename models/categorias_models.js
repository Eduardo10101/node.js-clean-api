import pool from "../database/connection.js";


async function getcategorias(id){
    console.log(id)
    const [rows] = await pool.query(`SELECT * FROM categorias `);
    return rows;
}


async function getALLcategorias(id){
    console.log(id)
    const [rows] = await pool.query(`SELECT * FROM produtos
INNER JOIN categorias ON produtos.id_categorias = categorias.id
WHERE categorias.id = ? `,[id]);
    return rows;
}



async function creatCategorias(categorias) {
    const {nome, descricao} = categorias;

    const [result] = await pool.query(`INSERT INTO categorias(nome, descricao) VALUES (?,?)`,
        [nome, descricao])
    return result.insertId
 }

 async function updateCategorias(id, categorias) {
    const {nome, descricao} = categorias;

    const [result] = await pool.query(`UPDATE categorias SET nome = ?, descricao = ?`, [nome, descricao, id] ) 

    return result;
}
async function delCategorias(id) {

    const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id] ) 

    return result;
}


export default{ getALLcategorias, getcategorias, delCategorias, creatCategorias, updateCategorias}