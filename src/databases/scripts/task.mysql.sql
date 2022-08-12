CREATE TABLE IF NOT EXISTS tasks (
	id int(11) NOT NULL AUTO_INCREMENT,
	title varchar(50) NOT NULL,
	description varchar(200) NOT NULL,
	status varchar(50) DEFAULT false,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES ('First', 'First description');
INSERT INTO tasks (title, description) VALUES ('Second', 'Second description');