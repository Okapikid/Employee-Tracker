// REQUIRED CONSTANTS
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ESTABLISH DATABASE CONNECTION
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employees_db",
  },
  console.log("Connected to the employee database")
);

// BEGINNING MENU OPTIONS
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do? (Use arrow keys)",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
        ],
      },
    ])
    // SWITCH CASES FOR BEGINNING MENU OPTIONS
    .then((answers) => {
      switch (answers.menu) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Employee":
          viewAddEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewAllDepartments();
        case "Add Department":
          addDepartment();
          break;
      }
    });
}

// FUNCTION FOR VIEW ALL EMPLOYEES
// function viewAllEmployees() {}
function viewAllEmployees() {
  connection.query(
    `SELECT employee.id AS Employee_ID, CONCAT (employee.first_name, " ", employee.last_name) AS Name, employeeRole.title AS Title, department.name AS Department, employeeRole.salary AS Salary, CONCAT (manager.first_name, " ", manager.last_name) AS Manager FROM employee JOIN employeeRole ON employee.role_id = employeeRole.id JOIN department ON employeeRole.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
    }
  );
}

menu();
