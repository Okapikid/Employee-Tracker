const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql",
  },
  console.log("Connected to the employee database")
);

function menu() {
  inquirer.prompt([
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
  ]);
}
