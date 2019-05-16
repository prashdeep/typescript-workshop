"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("../src/greet");
describe('Greet function get name should be invoked', function () {
    it('should be defined', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet('Mahesh', "Good evening")).toBeDefined("The definition greet() should be defined");
    });
    it('shoud be equal', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet('Mahesh', "Good evening")).toEqual("Welcome Mahesh!! Good evening");
    });
    it('Should not be equal - Negative test case', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet('Mahesh', "Good evening")).not.toEqual("Welcome Mahesh Good evening");
    });
});
//# sourceMappingURL=greet.spec.js.map