"use strict";
const drink = {
    color: 'brown',
    carbonated: true,
    summary() {
        return `A ${this.color} color drink`;
    },
};
/**
 * This instance is type of Car interface and must implement
 * its functions.
 */
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    owner: {
        name: 'ilkin',
        age: 28,
    },
    summary() {
        return `Name: ${this.owner.name}`;
    },
    updateOwner(newOwner) {
        this.owner = newOwner;
    },
};
const report = (vehicle) => {
    console.log(vehicle);
};
report(oldCivic);
oldCivic.updateOwner({ name: 'emin', age: 25 });
report(oldCivic);
/**
 * Report function accepts argument type of Reportable.
 * Reportable interface only requires summary() function.
 * Since drink object has that function, it is also accepted
 * as Reportable interface
 */
report(drink);
