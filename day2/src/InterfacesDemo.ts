//Interfaces

let computeTotalBill = function(bill:Bill):number{
    return bill.orderAmount + bill.tax*100 + bill.tip;
}

interface Bill{
    orderAmount:number;
    tax:number;
    tip:number
}

interface Restaurant {
    restName:string;
}

let order1 = {
    orderAmount:200,
    tax:0.15,
    tip:25,
    restName:'Nandana'
}



let nameOfRes = function(rest:Restaurant){
    console.log(` Restaurant name : ${rest.restName} `)
}

nameOfRes(order1);
console.log (`Total amount to be paid is ${computeTotalBill(order1)}`);


