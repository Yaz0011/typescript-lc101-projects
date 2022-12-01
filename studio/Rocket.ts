import {Cargo} from './Cargo'
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacity: number ){
        this.name = name;
        this.totalCapacityKg= totalCapacity;
    }
    sumMass(items:Payload[]): number {
        let sum: number = 0
        for (let i = 0; i < items.length; i++) {
            sum = sum + items[i].massKg;
        }
        // items.forEach (function(elem){
        //     sum = sum + elem.massKg;
        // })
        return sum;
    }

    currentMassKg():number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }


    canAdd(item: Payload): boolean {
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        //     return true;
        // else 
        //     return false;
        
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;

    }

    addCargo (cargo:Cargo): boolean {
        if (this.canAdd(cargo) ){
            this.cargoItems.push(cargo)
            return true;

        } else {
            return false;
        }
    }

    addAstronaut(astronaut:Astronaut): boolean{
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut)
            return true;
        } else { 
            return false;
        }
    }



}



// Example for METHOD
// getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * this.milesPerKilometer;
//     let hours: number = milesAway / this.speedMph;
//     return hours / 24;


// for (let i = 0; i < items.length; i++) {
//     sum = sum + items[i].massKg;
// }

    // THESE DO THE SAME THING. 
// items.forEach (function(elem){
//     sum = sum + elem.massKg;
// })
// return sum;
// }