CREATE DATABASE employeetracker_db;
USE  employeetracker_db;

CREATE TABLE roles (
id int auto_increment primary key,
title varchar(30),
salary decimal,
department_d int
);

CREATE TABLE employees (
id int auto_increment primary key,
first_name varchar(30),
last_name varchar (30),
role_id int,
manager_id int
);

CREATE TABLE department 
(
id int auto_increment primary key,
name varchar(30)
);

INSERT INTO employees (first_name, last_name, role_id) VALUES (`Max`, `Person`, 1);
INSERT INTO employees (first_name, last_name, role_id) VALUES (`Cass`, `Person`, 2);
INSERT INTO employees (first_name, last_name, role_id) VALUES (`Jeff`, `Person`, 4);
INSERT INTO roles (first_name, last_name, role_id) VALUES (`Alex`, `Person`, 3);

INSERT INTO employees (title, salary, department_d) VALUES (`Principle`, 45000, 1);
INSERT INTO employees (title, salary, department_d) VALUES (`Vice Principle`, 40000, 1);
INSERT INTO employees (title, salary, department_d) VALUES (`Teacher`, 30000, 3);
INSERT INTO employees (title, salary, department_d) VALUES (`TA`, 25000, 1);

INSERT INTO department (name) VALUES (`Faculty`);
INSERT INTO department (name) VALUES (`Math`);
INSERT INTO department (name) VALUES (`English`);
INSERT INTO department (name) VALUES (`Science`);

