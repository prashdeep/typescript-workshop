"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var ramesh = new Employee_1.Employee("Ramesh", 32, "Infosys");
var suresh = new Employee_1.Employee("Suresh", 34, "Infosys");
var harish = new Employee_1.Employee("Harish", 30, "Wipro");
var empName = ramesh.name, age = ramesh.age, comp = ramesh.company;
console.log(empName + "\n             of " + age + " having salary of \n              working in " + comp);
console.log("Value of PI is " + Employee_1.PI);
Employee_1.exportedFunction();
//# sourceMappingURL=Invoker.js.map