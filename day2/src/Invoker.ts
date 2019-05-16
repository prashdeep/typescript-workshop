import { Employee,PI,exportedFunction } from "./Employee";


const ramesh = new Employee("Ramesh",32, "Infosys");
const suresh = new Employee("Suresh",34, "Infosys");
const harish =  new Employee("Harish",30, "Wipro");


let {name:empName ,age:age, company:comp} = ramesh;
console.log(`${empName}
             of ${age} having salary of 
              working in ${comp}`);

console.log(`Value of PI is ${PI}`);

exportedFunction();