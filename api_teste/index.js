import { retorna, retornaID, retornaAno } from "./servico/retorna";
import {cadastra} from './servico/cadastro'

const app=express()


app.get('/campeonatos', async (req, res)=>{
    const campeonatos= await retorna();
    res.json(campeonatos)
})



app.get('/campeonatos/:id', async (req,res)=>{
    const id= parseInt(req.params.id)
    const campeonato= await retornaID(id)
    if (campeonato.length>0){
        res.json(campeonato)
    }else{
        res.status(404).json('nao encontrado')
    }
})


app.get('campeonatos', async (res,req)=>{
    const ano = parseInt(req.query.ano)
    const campeonato= await retornaAno(ano)
    if (typeof ano==undefined){
        campeonato= await retorna()
    }else{
        campeonato= await retornaAno(parseInt(ano))
    }
    if (campeonato.lenght>0){
        res.json(campeonato)
    }else{
        res.status(404).json('nada')
    }
})



app.post('/campeonatos', async (req, res)=>{
    const {ano}= req.body
    const {time}=req.body
    const {campeao}=req.body
    const resposta= await cadastra(ano, time, campeao)
    console.log(resposta)
    conexao.release()
})




app.listen(9000, async ()=>{
    const data= new Date()
})


