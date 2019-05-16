"use strict";
//Interfaces
var computeTotalBill = function (bill) {
    return bill.orderAmount + bill.tax * 100 + bill.tip;
};
var order1 = {
    orderAmount: 200,
    tax: 0.15,
    tip: 25,
    restName: 'Nandana'
};
var nameOfRes = function (rest) {
    console.log(" Restaurant name : " + rest.restName + " ");
};
nameOfRes(order1);
console.log("Total amount to be paid is " + computeTotalBill(order1));
//# sourceMappingURL=InterfacesDemo.js.map