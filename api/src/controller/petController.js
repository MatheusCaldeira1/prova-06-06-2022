import { Router } from "express";
import { consultarTodos } from "../repository/petRepository.js";
const server = Router();

server.get('/pets' , async (req,resp) => {
    try{ 
    const consolutar = req.body;
    const petconsulta = consultarTodos(consolutar);
    resp.send(petconsulta)
    }catch(err){
    resp.status(400).send({
        erro: err.message
    });
  }
} )



server.post('/pet/nome', async (req, resp) => {
    try{    
        const petParaInserir = req.body;
const petInserido = await adicionarPaciente(petParaInserir)
resp.send(petInserido)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server

