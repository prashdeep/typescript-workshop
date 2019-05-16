"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["APPROVED"] = "APPROVED";
    Status["REJECTED"] = "REJECTED";
})(Status = exports.Status || (exports.Status = {}));
var Order = /** @class */ (function () {
    function Order(food, price) {
        this.food = food;
        this.price = price;
        this.status = Status.PENDING;
    }
    Order.prototype.updateStatus = function (status) {
        this.status = status;
    };
    Order.prototype.getStatus = function () {
        return this.status;
    };
    return Order;
}());
exports.Order = Order;
var harish = new Employee_1.Employee("Harish", 33, "Infosys");
var order = new Order("Pizza", 200);
function printCurrentStatus(order) {
    console.log(order.getStatus());
}
exports.printCurrentStatus = printCurrentStatus;
console.log('Before updating the status');
printCurrentStatus(order);
order.updateStatus(Status.APPROVED);
console.log('After updating the status');
printCurrentStatus(order);
//# sourceMappingURL=Status.js.map