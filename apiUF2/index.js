import express from 'express'
const colecaoUF= require('./dados/dados')

const app= express()

const buscarPorNome= (nomeUf)=>{
    return colecaoUF.filter(i=>i.nome.toLowerCase().includes(nomeUf.toLowerCase()))
}

app.get('/ufs', (req,res)=> 
{
    const nomeUF= req.query.busca;
    const resultado= nomeUF? buscarPorNome(nomeUf): colecaoUF
    res.json(colecaoUF)

    if
})


app.get('/ufs/:iduf', (req,res){
    let uf;
    let mensagemErro= '';
    const idUF=parseInt(req.params.iduf);

    if(!(isNaN(idUF))){
        uf= colecaoUF.colecaoUF.find(u=> u.id.toLo===idUF);

        if (!uf){
            mensagemErro='uf nao encontrada'
        }

        else{
            mensagemErro='req inválida'
        }
    }
    
    


})


app.listen(8080, ()=>{
    console.log('servidor iniciado')
})




























