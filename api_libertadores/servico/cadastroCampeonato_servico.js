import pool from './conexao.js'


export async function cadastraCampeonato(campeao,vice,ano){
    const conexao= await pool.getConnection()
    const resposta= await conexao.query(
        'INSERT INTO campeonatos(campeao, vice, ano) values(?,?,?)', [campeao, vice, ano])
        console.log(resposta)
        conexao.release()
}


// ataques de mysql invection

