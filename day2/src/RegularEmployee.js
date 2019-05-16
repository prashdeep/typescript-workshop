"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(name, age, company, fixedSalary, vacationDays) {
        var _this = _super.call(this, name, age, company) || this;
        _this.fixedSalary = fixedSalary;
        _this.vacationDays = vacationDays;
        return _this;
    }
    RegularEmployee.prototype.getVacationDays = function () {
        return this.vacationDays;
    };
    return RegularEmployee;
}(Employee_1.Employee));
exports.RegularEmployee = RegularEmployee;
