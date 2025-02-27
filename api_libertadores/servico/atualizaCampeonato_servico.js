
import pool from './conexao.js'

export async function atualizaCampeonato(id, campeao, vice, ano){
    const conexao= await pool.getConnection()
    const query= "UPDATE campeonatos set campeao=?,vice=?, ano=? where id= ?";
    const [resposta]= await conexao.execute(query, [ campeao, vice, ano,id])
    console.log(resposta)
    conexao.release()
    return resposta;
}



export async function atualizaCampeonatoPacial(id, campos){
    const conexao= await pool.getConnection()
    const colunas= Object.keys(campos).map(campo=>`${campo}=?`).join(",");
    const valores= Object.values(campos)

    const query= `UPDATE campeonatos set ${colunas} where id = ?`;// campeao= ?
    valores.push(id);
    const [resposta]= await conexao.execute(query, valores);
    conexao.release()
    return resposta;
}
