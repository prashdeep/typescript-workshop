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
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(name, age, company, payPerHour, duration) {
        var _this = _super.call(this, name, age, company) || this;
        _this.payPerHour = payPerHour;
        _this.duration = duration;
        return _this;
    }
    ContractEmployee.prototype.getDuration = function () {
        return this.duration;
    };
    return ContractEmployee;
}(Employee_1.Employee));
exports.ContractEmployee = ContractEmployee;
