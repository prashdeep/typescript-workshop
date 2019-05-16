"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namer_1 = require("../src/namer");
describe('Namer get name should be invoked', function () {
    it('should be defined', function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).toBeDefined("The definition getName() should be defined");
    });
    it('should not be blank', function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).not.toMatch("sfsdfd");
    });
    it('Should return MYName', function () {
        var namer = new namer_1.Namer();
        expect(namer.getName()).toMatch("hello world");
    });
});
//# sourceMappingURL=namer.spec.js.map