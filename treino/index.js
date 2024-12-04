import express from 'express';

const app= express();
const calculadora= require('./calculadoraIMC.js')

app.get('/', (req,res)=>{
    let peso= req.query.peso;
    let altura= req.query.altura;

    if (calculadora.efetuarCalculo(req.query.altura) && calculadora.validaParametro(req.query.altura))
    {
        let imc= calculadora.efetuarCalculo(peso, altura);
        let status= calculadora.retornaStatus(imc);
        res.json({imc: imc, status:status, });
    }
    else
    {
        res.status(400).json({errroooooo})
    }
})

app.listen(8080,()=>{
    console.log('Servidor iniciado na porta 8080')
})
     

