import { Employee } from "./Employee";
import { RegularEmployee } from "./RegularEmployee";
import { ContractEmployee } from "./ContractEmployee";


let regularEmp:Employee = new RegularEmployee("Hari",28,"Infosys",20000,30);
let contractEmp:Employee = new ContractEmployee("Vinay",32,"Wipro",20000,30);

let vacationDays = (<RegularEmployee>regularEmp).getVacationDays();
console.log(`Vacation days :: ${vacationDays}`)

let contractDuration = (<ContractEmployee>contractEmp).getDuration();
console.log(`Contract duration in days :: ${contractDuration}`);


