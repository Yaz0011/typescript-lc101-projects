"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacity;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum = sum + items[i].massKg;
        }
        // items.forEach (function(elem){
        //     sum = sum + elem.massKg;
        // })
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        //     return true;
        // else 
        //     return false;
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
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
