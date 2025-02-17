import cors from 'cors';
import express from 'express';
import { retornaCampeonatos, retornaCampeonatosANO, retornaCampeonatosID, retornaCampeonatosTIME } from './servico/retornaCampeonatos_servico.js';
import { cadastraCampeonato } from './servico/cadastroCampeonato_servico.js';
import { atualizaCampeonato, atualizaCampeonatoPacial} from './servico/atualizaCampeonato_servico.js';
import { deletaCampeonato } from './servico/deletaCampeontaos_servico.js';
// import pool from './servicos/conexao.js';

const app = express();
app.use(cors())
app.use(express.json()) //suporte para json no body da requisição, para não dar erro


app.delete('/campeonatos/:id', async (req,res)=>{
    const {id}= req.params;
    const resultado= await deletaCampeonato(id)
    if (resultado.affectedRows>0)  {
        res.status(202).send('Registro deletado com sucesso!')
        
    } else {
        res.status(404).send('Registro não encontrado')
    }

})

app.patch('/campeonatos/:id', async(req,res)=>{
    const {id}= req.params;
    const {campeao, vice, ano}= req.body

    const camposAtualizar={};
    if (campeao) camposAtualizar.campeao= campeao;
    if (vice) camposAtualizar.vice= vice;
    if (ano) camposAtualizar.ano= ano;

    if (Object.keys(camposAtualizar).length===0) {
        res.status(400).send('Nenhum campo válido foi enviado para atualização')
    }else{
        const resultado= await  atualizaCampeonatoPacial(id,camposAtualizar)
        if (resultado.affectedRows>0) {
            res.status(202).send('registro atualizado com sucesso')
        }else{
            res.status(404).send('Registro não reencontrado')
        }
    }
})



app.put('/campeonatos/:id', async (req,res)=>{
    const {id}=req.params;
    const {campeao, vice, ano}= req.body
    //se chama desetruturação, o req.body pesquisa noorpo as chaves campeao, vice, ano
    if (campeao=== undefined|| vice ===undefined || ano=== undefined) {
        res.status(400).send('Todos os campos devem ser preenchidos!')
    }else{
        const resultado= await atualizacameponato(id, campeao, vice, ano);
        if (resultado.affectedRows>0) {
            res.status(202).send('dados atualizados com sucesso')
            
        } else {
            res.status(400).send('Registro não encontrado')
        }
    }
})



app.post('/campeonatos', async (req, res) =>{
    const campeao = req.body.campeao;
    const vice = req.body.vice;
    const ano = req.body.ano;
    await cadastraCampeonato(campeao, vice, ano);
    res.status(204).send({"Mensagem": "Cadastro efetivado com sucesso!"});
})

app.get('/campeonatos', async (req, res) =>{
    let campeonatos;
    const ano = req.query.ano;
    const time = req.query.time;

    if(typeof ano === 'undefined' && typeof time === 'undefined'){
        campeonatos = await retornaCampeonatos()
    } 
    else if (typeof ano !== 'undefined'){
        campeonatos = await retornaCampeonatosANO(ano)
    } 
    else if (typeof time !== 'undefined'){
        campeonatos = await retornaCampeonatosTIME(time)
    }

    if(campeonatos.length > 0){
        res.json(campeonatos)
    } else{
        res.status(404).json({mensagem: "Nenhum campeonato"})
    }
})

app.get('/campeonatos/:id' , async (req, res) =>{
    const id = parseInt(req.params.id);
    const campeonatos = await retornaCampeonatosID(id);
    if(campeonatos.length > 0){
        res.json(campeonatos);
    } else
    res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    
})




app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);
    // const conexao = await pool.getConnection();
    // console.log(conexao.threadId);
    // conexao.release();
})
