import pool from "./conexao.js";

export async function retornaCampeonatos(){
    const conexao= await pool.getConnection();
    const campeonatos_tb = await conexao.query('Select id, campeao, vice, ano from campeonatos')
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;

}

export async function retornaCampeonatosID(id){
    const conexao= await pool.getConnection();
    const campeonatos_tb = await conexao.query('Select id, campeao, vice, ano from campeonatos where id= '+id)
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;

}
