import pool from './conexao.js'

export async function retorna(){
    const conexao= await getConnection
    const table_tb = await conexao.query('select id, nome, algo')
    const table= table_tb[0]
    conexao.release()
}


export async function retornaID(id){
    const conexao= await pool.getConnection()
    const campeonatos_tb= await conexao.query('select pessoa, id, nome from tabela where id= '+id )
    const campeontaos= campeonatos_tb[0]
    conexao.release()
}

export async function retornaAno(ano){
    const conexao= await pool.getConnection()
    const campeonatos_tb= await conexao.query('select pessoa, id, nome from tabela where ano= '+ano )
    const campeontaos= campeonatos_tb[0]
    conexao.release()
}

async function executaquery(conexao, query){
    const resultado= await conexao.query(query)
    const result= resultado[0]
    return resposta;
}