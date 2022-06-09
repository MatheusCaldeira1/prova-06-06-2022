import { Router } from "express";
import { consultarTodos, inserirNome } from "../repository/petRepository.js";
const server = Router();

server.get('/pets' , async (req,resp) => {
    try{ 
    const petconsulta = await consultarTodos();
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
const petInserido = await inserirNome(petParaInserir)
resp.send(petParaInserir)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server

