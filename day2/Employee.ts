
export class Employee {

   /* private name:string;
    private age:number;
    private salary:number;
    private company:string;
    */
    constructor(private _name:string, 
                private _age:number, 
                private _salary?:number, 
                private _company?:string){
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
        this._company = _company;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }
    
    get age():number{
        return this._age;
    }

    set age(age:number){
        console.log(`came inside the set Age method`)
        this._age = age;
    }

    get salary():number{
        return this._salary;
    }

    set salary(salary:number){
        this._salary = salary;
    }


    get company():string{
        return this._company;
    }

    set company(company:string){
        this._company = company;
    }
}

export const PI = 3.142;
export function exportedFunction(){
    console.log(`This function is being exported....`);
}
/*
const ramesh = new Employee("Ramesh",32, 40000,'Capgemini');
const suresh = new Employee("Suresh",30);
const harish =  new Employee("Harish",30,30000);


let {name:empName ,age:age, salary:sal, company:comp} = ramesh;
console.log(`${empName}
             of ${age} having salary of 
             ${sal} working in ${comp}`);

ramesh.age  = 45;*/