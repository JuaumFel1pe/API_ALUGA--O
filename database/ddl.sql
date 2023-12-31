USE INFOADB;

--Tabela do cliente
CREATE TABLE TB_CLIENTE(
ID_CLIENTE 		INT KEY  PRIMARY KEY auto_increment,
NM_CLIENTE		VARCHAR(100),
DS_TELEFONE		VARCHAR(100),
DS_CPF			VARCHAR(100),
DS_CNH			VARCHAR(200)
);


--Tabela do tipo do veículo
CREATE TABLE TB_TIPO_VEICULO(
ID_TIPO_VEICULO			INT PRIMARY KEY AUTO_INCREMENT,
NM_TIPO_VEICULO			VARCHAR(100) NOT NULL
);


--Tabela dos veículos
CREATE TABLE TB_VEICULO(
ID_VEICULO			INT PRIMARY KEY AUTO_INCREMENT,
ID_TIPO_VEICULO		INT NOT NULL,
DS_MODELO			VARCHAR(100) NOT NULL,
DS_MARCA			VARCHAR(100) NOT NULL,
NR_ANO				INT NOT NULL,
DS_PLACA			VARCHAR(50) NOT NULL,
foreign key (ID_TIPO_VEICULO) REFERENCES TB_TIPO_VEICULO(ID_TIPO_VEICULO)
);

--Tabela sobre a locação
CREATE TABLE TB_LOCACAO(
ID_LOCACAO			INT PRIMARY KEY AUTO_INCREMENT,
ID_CLIENTE			INT NOT NULL,
ID_VEICULO			INT NOT NULL,
NR_KM_RETIRADA		VARCHAR(50) NOT NULL,
DT_LOCACAO			DATETIME NOT NULL, 
BT_SEGURO			BOOLEAN NOT NULL, 
DS_OBSERVACOES		VARCHAR(800) NOT NULL, 
DS_SITUACAO			VARCHAR(50) NOT NULL,
NR_KM_ENTREGA		INT NOT NULL, 
DT_ENTREGA			DATETIME NOT NULL,
VL_TOTAL			DECIMAL(15,2) NOT NULL,
FOREIGN KEY (ID_CLIENTE) REFERENCES TB_CLIENTE(ID_CLIENTE),
foreign key (ID_VEICULO) references TB_VEICULO(ID_VEICULO)
);