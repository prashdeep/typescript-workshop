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
var ramesh = new Employee("Ramesh", 32, 40000, 'Capgemini');
var suresh = new Employee("Suresh", 30);
var harish = new Employee("Harish", 30, 30000);
var empName = ramesh.name, age = ramesh.age, sal = ramesh.salary, comp = ramesh.company;
console.log(empName + "\n             of " + age + " having salary of \n             " + sal + " working in " + comp);
ramesh.age = 45;
