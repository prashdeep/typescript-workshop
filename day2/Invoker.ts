import { Employee } from "./Employee";


const ramesh = new Employee("Ramesh",32, 40000,'Capgemini');
const suresh = new Employee("Suresh",30);
const harish =  new Employee("Harish",30,30000);


let {name:empName ,age:age, salary:sal, company:comp} = ramesh;
console.log(`${empName}
             of ${age} having salary of 
             ${sal} working in ${comp}`);