"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("../src/greet");
describe('Greet function get name should be invoked', function () {
    it('should be defined', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet()).toBeDefined("The definition greet() should be defined");
    });
    it('should not be blank', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet()).not.toMatch("test");
    });
    it('Should return the greet with hello world', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet()).toMatch("hello world");
    });
    it('Should always return the greet ', function () {
        var greet = new greet_1.Greet();
        expect(greet.greet()).toContain('hello');
    });
});
//# sourceMappingURL=greet.spec.js.map