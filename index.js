// REQUIRED CONSTANTS
const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");

// ESTABLISH DATABASE CONNECTION
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql",
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
