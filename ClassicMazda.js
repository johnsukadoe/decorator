var ClassicMazda = /** @class */ (function () {
    function ClassicMazda() {
        this.description = 'Базовая Mazda';
    }
    ClassicMazda.prototype.cost = function () {
        return 20000;
    };
    return ClassicMazda;
}());
var LeatherSeatsDecorator = /** @class */ (function () {
    function LeatherSeatsDecorator(mazda) {
        this.mazda = mazda;
    }
    LeatherSeatsDecorator.prototype.cost = function () {
        return this.mazda.cost() + 1500;
    };
    Object.defineProperty(LeatherSeatsDecorator.prototype, "description", {
        get: function () {
            return this.mazda.description + ' с кожаными сиденьями';
        },
        enumerable: false,
        configurable: true
    });
    return LeatherSeatsDecorator;
}());
var SunroofDecorator = /** @class */ (function () {
    function SunroofDecorator(mazda) {
        this.mazda = mazda;
    }
    SunroofDecorator.prototype.cost = function () {
        return this.mazda.cost() + 1000;
    };
    Object.defineProperty(SunroofDecorator.prototype, "description", {
        get: function () {
            return this.mazda.description + ', с люком';
        },
        enumerable: false,
        configurable: true
    });
    return SunroofDecorator;
}());
var mazda = new ClassicMazda();
console.log(mazda.description, mazda.cost());
var mazdaWithSunroof = new SunroofDecorator(mazda);
console.log(mazdaWithSunroof.description, mazdaWithSunroof.cost());
var mazdaWithLeatherSeats = new LeatherSeatsDecorator(mazdaWithSunroof);
console.log(mazdaWithLeatherSeats.description, mazdaWithLeatherSeats.cost());
