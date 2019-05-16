"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("../src/Car");
describe('Test cases for Car', function () {
    it('Car object not initialized ', function () {
        var bmw = null;
        expect(bmw).not.toBeTruthy();
    });
    it('Car object should be initialized ', function () {
        var bmw = new Car_1.Car("BMW", 'RED', 'X1');
        expect(bmw).toBeTruthy();
    });
    it('Car object should be initialized', function () {
        var bmw = new Car_1.Car("BMW", 'RED', 'X1');
        expect(bmw).toBeDefined();
    });
    it('Car should have a color of RED', function () {
        var bmw = new Car_1.Car("BMW", 'RED', 'X1');
        expect(bmw.description()).toBe("Car BMW with color: RED and model of X1");
    });
});
//# sourceMappingURL=Car.spec.js.map