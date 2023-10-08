"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LeatherSeatsDecorator = /** @class */ (function () {
    function LeatherSeatsDecorator(mazda) {
        this.mazda = mazda;
    }
    LeatherSeatsDecorator.prototype.cost = function () {
        return this.mazda.cost() + 1500;
    };
    LeatherSeatsDecorator.prototype.description = function () {
        return this.mazda.description + ", с кожаными сиденьями";
    };
    return LeatherSeatsDecorator;
}());
exports.default = LeatherSeatsDecorator;
