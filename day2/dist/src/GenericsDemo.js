"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegularEmployee_1 = require("./RegularEmployee");
var Employee = /** @class */ (function () {
    function Employee(t) {
        this.t = t;
        this.t = t;
    }
    Employee.prototype.getEmployee = function () {
        return this.t;
    };
    Employee.prototype.setEmployee = function (t) {
        this.t = t;
    };
    return Employee;
}());
var regularEmp = new RegularEmployee_1.RegularEmployee("Hari", 22, "Wipro", 20000, 20);
var emp = new Employee(regularEmp);
console.log("Vacation days : " + emp.getEmployee().getVacationDays());
//# sourceMappingURL=GenericsDemo.js.map