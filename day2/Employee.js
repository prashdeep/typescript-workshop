"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    /* private name:string;
     private age:number;
     private salary:number;
     private company:string;
     */
    function Employee(_name, _age, _salary, _company) {
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
        this._company = _company;
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
        this._company = _company;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            console.log("came inside the set Age method");
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function (company) {
            this._company = company;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
exports.PI = 3.142;
function exportedFunction() {
    console.log("This function is being exported....");
}
exports.exportedFunction = exportedFunction;
/*
const ramesh = new Employee("Ramesh",32, 40000,'Capgemini');
const suresh = new Employee("Suresh",30);
const harish =  new Employee("Harish",30,30000);


let {name:empName ,age:age, salary:sal, company:comp} = ramesh;
console.log(`${empName}
             of ${age} having salary of
             ${sal} working in ${comp}`);

ramesh.age  = 45;*/ 
