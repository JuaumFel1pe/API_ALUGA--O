import { Router } from "express";
import { inserirCliente, deleteCliente, todosCLientes, pesquisaNome, alterarCliente, cpfSearch } from "../repository/clienteRepository.js";

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
        let add = req.body

        if(!add.cnh)
            throw new Error('CNH é obrigatório.')

        if(isNaN(add.cnh))
            throw new Error('CNH inválida.')

        if(!add.telefone)
            throw new Error('Telefone é obrigatório.')

        if(add.telefone.length > 15)
            throw new Error('Telefone inválido.')

        if(!add.email)
            throw new Error('Email é obrigatório.')

        if(!add.cpf)
            throw new Error('CPF é obrigatório.')

        //if(isNaN(add.cpf))
        //    throw new Error('CPF inválido.')

        let r = await cpfSearch(add.cpf)
        if(r.length != 0)
            throw new Error('CPF já cadastrado.');

        if(!add.nome)
            throw new Error('Nome obrigatório.')



        const data = await inserirCliente(add)
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
        if(data != 1)
            throw new Error('O contato não pode ser alterado')
        else
        resp.status(200).send
    } catch (err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

server.delete('/cliente/:id', async (req, resp) =>{
    try {
        const addID = req.params.id
        const data = await deleteCliente(addID)
        if(data != 1)
            throw new Error('O contato não pode ser apagado')
        else
        resp.status(200).send
    } catch (err) {
        resp.status(500).send({
            erro:err.message
        })
    }
})

export default server;