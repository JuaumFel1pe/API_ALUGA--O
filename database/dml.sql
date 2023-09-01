--selecionar todos os clientes
SELECT * FROM TB_CLIENTE;

--selecionar os clientes pelo nome  
SELECT * FROM TB_CLIENTE
WHERE NM_CLIENTE LIKE ?;

--inserir um novo cliente
INSERT INTO TB_CLIENTE (NM_CLIENTE, DS_EMAIL ,DS_TELEFONE, DS_CPF, DS_CNH)
		VALUES (?, ?, ?, ?, ?);
        
--alterar algum cliente
UPDATE TB_CLIENTE 
SET NM_CLIENTE = 	?,
	DS_EMAIL	=	?,
	DS_TELEFONE	= 	?,
	DS_CPF	=	  	?,
    DS_CNH = 		?
WHERE ID_CLIENTE = ?;

--deletar algum cliente
DELETE FROM TB_CLIENTE
WHERE ID_CLIENTE = ?;

--/---/--/--/--/---/--/--/--/---/--/--/--/---/--/--/--/---/--/--/

--Selecionar os tipos de veículos
SELECT * FROM TB_TIPO_VEICULO
WHERE ID_TIPO_VEICULO = ?;

--listar tipos de veículos
select id_tipo_veiculo      id,
             ds_tipo              tipo
        from tb_tipo_veiculo;


--Selecionar os veículos
SELECT ID_VEICULO  			AS 	ID,
		ID_TIPO_VEICULO		AS	IDTipoVeiculo,
		DS_MODELO			AS 	Modelo,
		DS_MARCA			AS 	Marca,
		NR_ANO				AS 	Ano,
        DS_PLACA			AS 	Placa
FROM TB_VEICULO;

--Selecionar os carros através do modelo, da marca ou da placa 
SELECT ID_VEICULO  			AS 	ID,
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
ORDER BY ID_VEICULO;

--Inserir um veículo
INSERT INTO TB_VEICULO(ID_TIPO_VEICULO, DS_MODELO, DS_MARCA, NR_ANO, DS_PLACA)
		VALUES	(?, ?, ?, ?, ?);

--Inserir um tipo de veículo
INSERT INTO TB_TIPO_VEICULO(NM_TIPO_VEICULO)
		VALUES(?);
        
--Deletar algum veículo
DELETE FROM TB_VEICULO
WHERE ID_VEICULO = ?;

--Alterar algum veículo
UPDATE TB_VEICULO
SET TB_TIPO_VEICULO = ?,
	DS_MODELO = ?,
	DS_MARCA = ?,
	NR_ANO = ?,
    DS_PLACA = ?
WHERE ID_VEICULO = ?;

--/---/--/--/--/---/--/--/--/---/--/--/--/---/--/--/--/---/--/--/

SELECT ID_LOCACAO AS ID,
		TB_LOCACAO.ID_CLIENTE AS ID_CLiente,
        TB_LOCACAO.ID_VEICULO	as ID_Veículo,
        NR_KM_RETIRADA as KM_Retirada,
        DT_LOCACAO as Data_Locação,
        BT_SEGURO as Seguro,
		DS_OBSERVACOES as Observações,
        DS_SITUACAO as Situação,
        NR_KM_ENTREGA as KM_Entrega,
        DT_ENTREGA as  Data_Entrega,
        VL_TOTAL as Valor_Total,
        DS_MODELO AS Modelo,
        DS_MARCA AS Marca,
        NR_ANO AS Ano,
        DS_PLACA AS Placa,
        NM_CLIENTE AS Nome,
        DS_TELEFONE AS Telefone,
        DS_CPF AS CPF,
        DS_CNH as CNH
FROM TB_LOCACAO
INNER JOIN TB_VEICULO ON TB_LOCACAO.ID_VEICULO = TB_VEICULO.ID_VEICULO
INNER JOIN TB_CLIENTE ON TB_LOCACAO.ID_CLIENTE = TB_CLIENTE.ID_CLIENTE;


INSERT INTO TB_LOCACAO(ID_CLIENTE, ID_VEICULO, NR_KM_RETIRADA, DT_LOCACAO, BT_SEGURO, DS_OBSERVACOES, DS_SITUACAO, NR_KM_ENTREGA, DT_ENTREGA, VL_TOTAL)
		VALUES (1, 2, "8695", '2023-08-20', 1, 'Carro fodão que você sempre quis na vida.', "Novo", '8695', '2023-08-20', '300000.00');
        
UPDATE TB_LOCACAO
SET ID_CLIENTE = 2,
	ID_VEICULO = 1,
    NR_KM_RETIRADA = "9000",
    DT_LOCACAO = '2023-10-02',
    BT_SEGURO = 2,
    DS_OBSERVACOES = 'Carro medíocre! Só comppra quem é pobre.',
    DS_SITUACAO = "Usado", 
    NR_KM_ENTREGA = '9000',
    DT_ENTREGA = '2023-10-02',
    VL_TOTAL = 10000.00
WHERE ID_LOCACAO = 2;
