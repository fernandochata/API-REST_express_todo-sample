CREATE TABLE IF NOT EXISTS tasks (
    id serial,
    title varchar,
    description text,
    status boolean not null default false,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
)

INSERT INTO tasks (title, description) VALUES ('task 1', 'description task 1');
INSERT INTO tasks (title, description) VALUES ('task 2', 'description task 2');
INSERT INTO tasks (title, description) VALUES ('task 3', 'description task 3');
INSERT INTO tasks (title, description) VALUES ('task 4', 'description task 4');
INSERT INTO tasks (title, description) VALUES ('task 5', 'description task 5');

select * from tasks;