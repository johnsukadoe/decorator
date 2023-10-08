import LeatherSeatsDecorator from './LeatherSeatsDecorator';
import SunroofDecorator from './SunroofDecorator';

class ClassicMazda{
    description:string;
    constructor(){
        this.description= 'Базовая Mazda'
    }
    cost():number{
        return 20000;
    }
}

const basicMazda = new ClassicMazda();
console.log(`${basicMazda.description}: $${basicMazda.cost()}`);

const mazdaWithLeatherSeats = new LeatherSeatsDecorator(basicMazda);
console.log(`${mazdaWithLeatherSeats.description()}: $${mazdaWithLeatherSeats.cost()}`);

const mazdaWithSunroof = new SunroofDecorator(basicMazda);
console.log(`${mazdaWithSunroof.description()}: $${mazdaWithSunroof.cost()}`);



export default ClassicMazda;