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