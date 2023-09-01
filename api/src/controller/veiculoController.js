import { Router } from 'express'
import {deleteVeiculo, inserirVeiculo, consulta, alterarVeiculo} from '../repository/veiculoRepository.js'
import {buscaTipoID, listarTipos} from '../repository/tipoVeiculoRepository.js'

let server = Router();

server.post('/veiculo', async (req, resp) =>{
    try {   
        let veiculo = req.body
        let r = await inserirVeiculo(veiculo);
    } catch (err) {
        resp.status(500).send({
            erro:err.message
        })
    }
})