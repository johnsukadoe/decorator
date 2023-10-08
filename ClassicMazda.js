"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LeatherSeatsDecorator_1 = require("./LeatherSeatsDecorator");
var SunroofDecorator_1 = require("./SunroofDecorator");
var ClassicMazda = /** @class */ (function () {
    function ClassicMazda() {
        this.description = 'Базовая Mazda';
    }
    ClassicMazda.prototype.cost = function () {
        return 20000;
    };
    return ClassicMazda;
}());
var basicMazda = new ClassicMazda();
console.log("".concat(basicMazda.description, ": $").concat(basicMazda.cost()));
var mazdaWithLeatherSeats = new LeatherSeatsDecorator_1.default(basicMazda);
console.log("".concat(mazdaWithLeatherSeats.description(), ": $").concat(mazdaWithLeatherSeats.cost()));
var mazdaWithSunroof = new SunroofDecorator_1.default(basicMazda);
console.log("".concat(mazdaWithSunroof.description(), ": $").concat(mazdaWithSunroof.cost()));
exports.default = ClassicMazda;
