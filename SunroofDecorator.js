"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SunroofDecorator = /** @class */ (function () {
    function SunroofDecorator(mazda) {
        this.mazda = mazda;
    }
    SunroofDecorator.prototype.cost = function () {
        return this.mazda.cost() + 1000;
    };
    SunroofDecorator.prototype.description = function () {
        return this.mazda.description + ", с люком";
    };
    return SunroofDecorator;
}());
exports.default = SunroofDecorator;
