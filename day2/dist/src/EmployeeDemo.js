"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegularEmployee_1 = require("./RegularEmployee");
var ContractEmployee_1 = require("./ContractEmployee");
var regularEmp = new RegularEmployee_1.RegularEmployee("Hari", 28, "Infosys", 20000, 30);
var contractEmp = new ContractEmployee_1.ContractEmployee("Vinay", 32, "Wipro", 20000, 30);
var vacationDays = regularEmp.getVacationDays();
console.log("Vacation days :: " + vacationDays);
var contractDuration = contractEmp.getDuration();
console.log("Contract duration in days :: " + contractDuration);
//# sourceMappingURL=EmployeeDemo.js.map