import express from 'express'
import { retornaMedicos, retornaMedicosNome, retornaMedicosEspecialidade } from './servico/retorna_Medicos.js'


const app= express()



app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;

    try {
        if (typeof especialidade === 'undefined' && typeof nome === 'undefined') {
            medicos = await retornaMedicos();
        } 
        else if (typeof nome !== 'undefined') {
            medicos = await retornaMedicosNome(nome);
        } 
        else if (typeof especialidade !== 'undefined') {
            medicos = await retornaMedicosEspecialidade(especialidade);
        }

        if (!medicos || medicos.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum médico encontrado." });
        }
        res.json(medicos);

    } catch (erro) {
        console.error("Erro ao buscar médicos:", erro);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
});



app.listen(9000, async()=>{
    const data= new Date()
    console.log("Servidor iniciado em: "+data)

})
