import { config } from "./connection";

export async function buscaTipoID(id){
    const sql = `SELECT * FROM TB_TIPO_VEICULO
    WHERE ID_TIPO_VEICULO = ?`;
    const [data] = await config.query(sql, [id])
    return data;
}

export async function listarTipos(){
    const sql = `select id_tipo_veiculo      id,
    ds_tipo              tipo
from tb_tipo_veiculo`;
    const [data] = await config.query(sql)
    return data
}