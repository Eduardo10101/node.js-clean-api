import pool from "../database/connection.js";


async function getALLcategorias(id){
    console.log(id)
    const [rows] = await pool.query(`SELECT * FROM categorias WHERE id = ?`, [id]);
    return rows;
}


export default{ getALLcategorias }