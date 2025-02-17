import pool from './conexao.js'

export async function cadastraPessoa(nome, email, telefone){
    const conexao= await pool.getConnection()
    const resposta= await conexao.query('insert into leads(nome, email, telefone) values= (?,?,?)')
}