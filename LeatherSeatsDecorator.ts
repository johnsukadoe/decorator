import ClassicMazda from "./ClassicMazda";
class LeatherSeatsDecorator {
    private mazda: ClassicMazda;

    constructor(mazda: ClassicMazda) {
        this.mazda = mazda;
    }

    cost(): number {
        return this.mazda.cost() + 1500;
    }

    description(): string {
        return this.mazda.description + ", с кожаными сиденьями";
    }
}

export default LeatherSeatsDecorator;