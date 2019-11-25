const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employeetracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    begin();
});

function addDepartment() {
    inquirer.prompt([{
        name: "entry",
        type: "input",
        message: "Enter Department you wish to add here:"

    }]).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.entry],
            function (err) {
                if (err) throw err;
                begin();
            });
    });
};

function addRole() {
    inquirer.prompt([
        {
            name: "entry",
            type: "input",
            message: "Enter the Role you wish to add here:"

        },
        {
            name: "salentry",
            type: "input",
            message: "Salary for the role?"
        },
        {
            name: "departmententry",
            type: "input",
            message: "Department id?"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [
            answer.entry,
            answer.salentry,
            answer.departmententry
        ],
            function (err) {
                if (err) throw err;
                begin();
            });
    });
};

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstnameentry",
            type: "input",
            message: "Enter the Employee's first name here:"
        },
        {
            name: "lastnameentry",
            type: "input",
            message: "Enter the Employee's last name here:"
        },
        {
            name: "roleentry",
            type: "input",
            message: "role id?"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)", [
            answer.firstnameentry,
            answer.lastnameentry,
            answer.roleentry
        ],
            function (err) {
                if (err) throw err;
                begin();
            });
    });
};

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        begin();
    })
};

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        begin();
    })
};

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        begin();
    })
};

function updateRole() {
    connection.query("SELECT first_name FROM employee", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "choice",
                input: "rawlist",
                message: "Which employee's role woul you like to change?",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(res[i].item_name);
                    }
                    return choiceArray;
                }

            }
        ]).then(function () {

        })
    })
};

function begin() {
    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add Department", "Add Roles", "Add Employee",
                "View Department", "View Roles", "View Employees", "Update Employee's Role", "Exit"]
        }
    ]).then(function (answer) {
        switch (answer.options) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Roles":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Department":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update Employee's Role":
                updateRole();
                break;
            case "Exit":
                connection.end();
        }
    })
}