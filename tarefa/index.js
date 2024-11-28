// const express = require('express')
// const colecao = require('../tarefa/dados/colecao.js')

// const app= express;

// app.get('/gg', (req, res) => {
//     res.json(colecao.colecpessoas);
// });

const lista = [
    {id: 0, nome: "Vilhena"},
    {id: 1, nome: "Vilhena"},
    {id: 2, nome: "Vilhena"},
    {id: 3, nome: "Porto Velho"},
    {id: 4, nome: "Comodoro"},
]

// for(qualquerCoisa of lista) {
//     console.log(qualquerCoisa)
// }


let res = lista.filter((teste) => teste.nome == "Vilhena" && teste.id < 2 || teste.nome == "Porto Velho")

console.log(res)