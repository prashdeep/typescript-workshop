var Nandana = /** @class */ (function () {
    function Nandana() {
    }
    Nandana.prototype.placeOrder = function (food) {
        return Math.round(Math.random() * 10000);
    };
    ;
    Nandana.prototype.viewStatus = function (orderId) {
        return "Pending";
    };
    Nandana.prototype.updateOrder = function (orderId) {
        var food = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            food[_i - 1] = arguments[_i];
        }
        console.log("updating " + orderId + " with " + food);
    };
    ;
    Nandana.prototype.cancelOrder = function (orderId) {
        console.log("Cancelling the order with orderId of " + orderId);
    };
    return Nandana;
}());
var printOrder = function (order) {
    return order.placeOrder('Pulav');
};
console.log("" + printOrder(new Nandana()));
