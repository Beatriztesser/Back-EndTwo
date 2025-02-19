import pool from 'mysql/promise'

export async function cadastra(){
    const conexao= await pool.getConnection()
    const cadastro= await conexao.query(`INSERT INTO tabela 
        values (campeao, ano, time) values (?,?,?),`[campeao, ano, time])

        conexao.release()
}






export async function atulizaGeral(){
    const conexao= await pool.getconnection()
    const atualiza= await conexao.query('UPDATE table set campeao=?, ano=?, time=? where id=?')
}