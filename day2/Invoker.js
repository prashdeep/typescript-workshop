"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var ramesh = new Employee_1.Employee("Ramesh", 32, 40000, 'Capgemini');
var suresh = new Employee_1.Employee("Suresh", 30);
var harish = new Employee_1.Employee("Harish", 30, 30000);
var empName = ramesh.name, age = ramesh.age, sal = ramesh.salary, comp = ramesh.company;
console.log(empName + "\n             of " + age + " having salary of \n             " + sal + " working in " + comp);
