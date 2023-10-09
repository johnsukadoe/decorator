interface iMazda {
    cost(): number;
    description: string;
}

class ClassicMazda implements iMazda {
    description: string;

    constructor() {
        this.description = 'Базовая Mazda';
    }

    cost(): number {
        return 20000;
    }
}

class LeatherSeatsDecorator implements iMazda {
    private mazda: ClassicMazda;

    constructor(mazda: ClassicMazda) {
        this.mazda = mazda;
    }

    cost(): number {
        return this.mazda.cost() + 1500;
    }

    get description(): string {
        return this.mazda.description + ' с кожаными сиденьями';
    }
}

class SunroofDecorator implements iMazda {
    private mazda: ClassicMazda;

    constructor(mazda: ClassicMazda) {
        this.mazda = mazda;
    }

    cost(): number {
        return this.mazda.cost() + 1000;
    }

    get description(): string {
        return this.mazda.description + ', с люком';
    }
}

const mazda = new ClassicMazda()
console.log(mazda.description, mazda.cost());


const mazdaWithSunroof = new SunroofDecorator(mazda);
console.log(mazdaWithSunroof.description, mazdaWithSunroof.cost());


const mazdaWithLeatherSeats = new LeatherSeatsDecorator(mazdaWithSunroof);
console.log(mazdaWithLeatherSeats.description, mazdaWithLeatherSeats.cost());
