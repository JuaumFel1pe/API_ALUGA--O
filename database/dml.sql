--selecionar todos os clientes
SELECT * FROM TB_CLIENTE;

--selecionar os clientes pelo nome  
SELECT * FROM TB_CLIENTE
WHERE NM_CLIENTE LIKE '%A%';

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
