import { config } from "./connection";

//export async function selecionarVeiculos(){
//    const sql = `SELECT ID_VEICULO  			AS 	ID,
//    ID_TIPO_VEICULO		AS	IDTipoVeiculo,
//    DS_MODELO			AS 	Modelo,
//    DS_MARCA			AS 	Marca,
//    NR_ANO				AS 	Ano,
//    DS_PLACA			AS 	Placa
//    FROM TB_VEICULO;`
//    const [data] = await config.query(sql)
//    return data;
//}

export async function inserirVeiculo(veiculo){
    const sql = `INSERT INTO TB_VEICULO(ID_TIPO_VEICULO, DS_MODELO, DS_MARCA, NR_ANO, DS_PLACA)
    VALUES	(?, ?, ?, ?, ?);`
    const [data] = await config.query(sql, [veiculo.idTIpoVeiculo, veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa])
    veiculo.id = data.insertId;
    return data;
}

export async function consulta(busca){
    const sql = `SELECT ID_VEICULO  			AS 	ID,
    ID_TIPO_VEICULO		AS	IDTipoVeiculo,
    DS_MODELO			AS 	Modelo,
    DS_MARCA			AS 	Marca,
    NR_ANO				AS 	Ano,
    DS_PLACA			AS 	Placa
FROM TB_VEICULO
INNER JOIN TB_TIPO_VEICULO ON TB_TIPO_VEICULO.ID_TIPO_VEICULO = TB_VEICULO.ID_TIPO_VEICULO
WHERE DS_MODELO LIKE ? OR
  DS_MARCA 	LIKE ? OR
  DS_PLACA	LIKE ?
ORDER BY ID_VEICULO;`
    const [data] = await config.query(sql, [`%${busca}%`, `%${busca}%`, `%${busca}%`])
    return data;
}

export async function deleteVeiculo(id){
    const sql = `DELETE FROM TB_VEICULO
    WHERE ID_VEICULO = ?;`
    const [data] = await config.query(sql, [id])
    return data.affectedRows;
}

export async function alterarVeiculo(id ,veiculo){
    const sql = `UPDATE TB_VEICULO
    SET TB_TIPO_VEICULO = ?,
        DS_MODELO = ?,
        DS_MARCA = ?,
        NR_ANO = ?,
        DS_PLACA = ?
    WHERE ID_VEICULO = ?;`
    const [data] = await config.query(sql, [veiculo.idTIpoVeiculo, veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa, id])
    return data.affectedRows
}