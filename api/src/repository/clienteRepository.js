import { config } from "./connection.js";

export async function todosCLientes(){
    const sql = `SELECT 	
    ID_CLIENTE AS ID,
    NM_CLIENTE AS nome,
    DS_EMAIL AS email,
    DS_TELEFONE as telefone,
    DS_CPF	as cpf,
    DS_CNH	as cnh FROM TB_CLIENTE;`

    const [resp] = await config.query(sql)
    return resp;
}

export async function inserirCliente (cliente){
    const sql = `INSERT INTO TB_CLIENTE (NM_CLIENTE, DS_EMAIL, DS_TELEFONE, DS_CPF, DS_CNH)
    VALUES (?, ?, ?, ?, ?);`

    const [resp] = await config.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh])
    return resp[0];
}

export async function pesquisaNome(nome){
    const sql = `SELECT 	
    ID_CLIENTE AS ID,
    NM_CLIENTE AS nome,
    DS_EMAIL AS email,
    DS_TELEFONE as eelefone,
    DS_CPF	as cpf,
    DS_CNH	as cnh
    FROM TB_CLIENTE
    WHERE NM_CLIENTE LIKE ?;`

    const [resp] = await config.query(sql, [`%${nome}%`])
    return resp;
}

export async function alterarCliente(cliente, id){
    const sql = `UPDATE TB_CLIENTE 
    SET NM_CLIENTE = 	?,
        DS_EMAIL	=	?,
        DS_TELEFONE	= 	?,
        DS_CPF	=	  	?,
        DS_CNH = 		?
    WHERE ID_CLIENTE = ?;`

    const [resp] = await config.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, id])
    return resp.affectedRows;
}

export async function deleteCliente(id){
    const sql = `DELETE FROM TB_CLIENTE
    WHERE ID_CLIENTE = ?;`

    const [resp] = await config.query(sql, [id])
    return resp.affectedRows;
}

export async function cpfSearch(busca){
    const sql = `SELECT 	
    ID_CLIENTE AS ID,
    NM_CLIENTE AS nome,
    DS_EMAIL AS email,
    DS_TELEFONE as eelefone,
    DS_CPF	as cpf,
    DS_CNH	as cnh
    FROM TB_CLIENTE
    WHERE DS_CPF LIKE ?;`
    const [resp] = await config.query(sql, [`%${busca}%`])
    return resp;
}

