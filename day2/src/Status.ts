import { Employee } from "./Employee";

export enum Status {
    PENDING="PENDING",
    APPROVED="APPROVED",
    REJECTED="REJECTED"
}

export class Order {
    food:string;
    price:number;

    status:Status;
    constructor(food:string, price:number){
        this.food = food;
        this.price = price;
        this.status = Status.PENDING;
    }

    updateStatus(status:Status):void{
        this.status = status;
    }

    getStatus():Status{
        return this.status;
    }


}

 let harish:Employee = new Employee("Harish",33,"Infosys");
 
 let order = new Order("Pizza", 200);
export function printCurrentStatus(order:Order){
    console.log(order.getStatus())
}

console.log('Before updating the status')
printCurrentStatus(order);
order.updateStatus(Status.APPROVED);
console.log('After updating the status')
printCurrentStatus(order);


