import pool from 'mysql/promise'

export async function cadastra(){
    const conexao= await pool.getConnection(campeao,vice,ano)
    const cadastro= await conexao.query(`INSERT INTO tabela 
        values (campeao, ano, time) values (?,?,?),`[campeao, ano, time])

        conexao.release()
}

export async function atualizaTudo(campeao, vice, time){
    const conexao= await pool.getConnection()
    const query= "UPDATE tabela set campeao=?, vice=?, time=? where id=?"
    const resposta= await conexao.execute(query[campeao,vice,time])
}