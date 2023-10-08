import ClassicMazda from "./ClassicMazda";
class SunroofDecorator {
    private mazda: ClassicMazda;

    constructor(mazda: ClassicMazda) {
        this.mazda = mazda;
    }

    cost(): number {
        return this.mazda.cost() + 1000;
    }

    description(): string {
        return this.mazda.description + ", с люком";
    }
}

export default SunroofDecorator;