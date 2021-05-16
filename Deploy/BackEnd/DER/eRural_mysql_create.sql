CREATE TABLE `tb_produto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`categoria_id` INT NOT NULL,
	`nome` varchar(min = 3, max = 30) NOT NULL,
	`quantidade` INT NOT NULL,
	`peso` FLOAT NOT NULL,
	`preco` DECIMAL NOT NULL,
	`imagem` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_categoria` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(min = 3, max = 30) NOT NULL,
	`descricao` varchar(min = 3, max = 30) NOT NULL,
	`imagem` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_produto` ADD CONSTRAINT `tb_produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `tb_categoria`(`id`);

