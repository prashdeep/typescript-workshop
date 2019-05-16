import {Employee} from "./Employee";

export class ContractEmployee extends Employee {

    payPerHour:number;
    duration:number;

    constructor(name:string, age:number, company:string, payPerHour:number, duration:number){
        super(name,age,company);
        this.payPerHour = payPerHour;
        this.duration = duration;
    }

    getDuration():number{
        return this.duration;
    }

    
}