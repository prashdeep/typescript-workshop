import { RegularEmployee } from "./RegularEmployee";

class Employee<T> {

    constructor ( private t:T ){
        this.t = t;
    }
    getEmployee ():T{
        return this.t;
    }
    setEmployee(t:T){
        this.t = t;
    }
}

let regularEmp:RegularEmployee = new RegularEmployee("Hari",22,"Wipro",20000,20);

let emp:Employee<RegularEmployee> = new Employee<RegularEmployee>(regularEmp);

console.log(`Vacation days : ${emp.getEmployee().getVacationDays()}`);
