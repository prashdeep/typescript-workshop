"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.description = function () {
        return "Car " + this.name + " with color: " + this.color + " and model of " + this.model;
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map