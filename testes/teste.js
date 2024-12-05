import express from 'express';
const app = express();

const calculadoraIMC= require('./calculadoraIMC')

app.get('/', (req, res)=>{

    let peso= req.query.peso;
    let altura=req.query.altura;

    let imc= calculadoraIMC.efetuarCalculoIMC(peso,altura)
    res.json({imcc:imc})
    

})

app.listen(8080,()=>{
    let data=new Date();
    console.log('servidor iniciado em: '+ data)
})