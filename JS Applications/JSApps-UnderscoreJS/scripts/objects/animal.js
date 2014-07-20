'use strict';
var Animal = (function () {
    function Animal(name, species, legsCount) {
        this.name = name;
        this.species = species;
        this.legsCount = legsCount;
    }

    Animal.prototype.toString = function () {
        return (this.name + ' (' + this.species + ')' + ' - ' + this.legsCount + ' legs');
    };

    return Animal;
}());
