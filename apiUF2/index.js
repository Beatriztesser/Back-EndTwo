// const express= require('express')
// const colecaoUF= require('./dados/dados')

// const app= express()

// app.get('/ufs', (req,res)=> 
// {
//     res.json(colecaoUF)
// })


// app.get('/ufs/:iduf', (req,res){
//     let uf;
//     let mensagemErro= '';
//     const idUF=parseInt(req.params.iduf);

//     if(!(isNaN(idUF))){
//         uf= colecaoUF.colecaoUF.find(u=> u.id===idUF);

//         if (!uf){
//             mensagemErro='uf nao encontrada'
//         }

//         else{
//             mensagemErro='req inválida'
//         }
//     }
    
    


// })


// app.listen(8080, ()=>{
//     console.log('servidor iniciado')
// })



import express from 'express';
import colecaoUF from './dados/dados.js';


const app= express();
let lista;

app.get('/ufs', (req,res){
    res.json(colecaoUF)
})


app.get('/colecaoUF/:idUFF'){
    const colecao= parseInt(req.params.colecaoUF);
    lista= colecaoUF.colecaoUF.find(u=> u.id===colecao)

    if(!(isNaN(colecao)){

    })
}

























