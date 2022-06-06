import { Router } from "express";
import { consultarTodos } from "../repository/petRepository";
const server = Router();

server.get('/pets' , async () => (req,resp), ()=> {
    const consolutar = consultarTodos().req.body


} )

server.post('/pet/nome'), async 


export default server

