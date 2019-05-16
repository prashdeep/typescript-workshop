import {Employee} from "./Employee";

export class RegularEmployee extends Employee {

    fixedSalary:number;
    vacationDays:number;

    constructor(name:string, age:number, company:string, fixedSalary:number, vacationDays:number){
        super(name,age,company);
        this.fixedSalary = fixedSalary;
        this.vacationDays = vacationDays;
    }

    getVacationDays():number{
        return this.vacationDays;
    }
}