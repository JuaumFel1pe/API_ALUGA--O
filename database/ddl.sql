USE INFOADB;

CREATE TABLE TB_CLIENTE(
ID_CLIENTE 		INT KEY  PRIMARY KEY auto_increment,
NM_CLIENTE		VARCHAR(100),
DS_TELEFONE		VARCHAR(100),
DS_CPF			VARCHAR(100),
DS_CNH			VARCHAR(200)
);