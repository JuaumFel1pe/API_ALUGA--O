import { Router } from "express";
import { inserirCliente, deleteCliente, todosCLientes, pesquisaNome, alterarCliente } from "../repository/clienteRepository.js";

const server = Router();

server.get('/cliente', async (req, resp) =>{
    try {
        const data = await todosCLientes();
        resp.send(data);
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

server.post('/cliente', async (req, resp) =>{
    try {
        const add = req.body
        const data = inserirCliente(add)
        resp.send(data)
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

server.get('/cliente/busca', async (req, resp) =>{
    try {
        const { nome } = req.query
        const data = await pesquisaNome(nome)
        resp.send(data)
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

server.put('/cliente/:id', async (req, resp) =>{
    try {
        const add = req.body
        const addID = req.params.id
        const data = await alterarCliente(add, addID)
        resp.send(data)
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

export default server;