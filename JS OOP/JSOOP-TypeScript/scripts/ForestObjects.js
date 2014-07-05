var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ForestObjects;
(function (ForestObjects) {
    var ForestObject = (function () {
        function ForestObject(id, isPoisonous, position) {
            this.isDead = false;
            this.id = id;
            this.isPoisonous = isPoisonous;
            this.position = {
                x: position.x,
                y: position.y
            };
        }
        ForestObject.prototype.toString = function () {
            var resultString = 'id#' + this.id + ', ' + (this.isPoisonous ? 'poisonous' : 'not poisonous');
            return resultString;
        };

        ForestObject.prototype.died = function () {
            this.health = 0;
            this.isDead = true;
        };
        return ForestObject;
    })();

    var Plant = (function (_super) {
        __extends(Plant, _super);
        function Plant(id, isPoisonous, position) {
            _super.call(this, id, isPoisonous, position);
        }
        Plant.prototype.toString = function () {
            var resultString = 'plant ' + _super.prototype.toString.call(this);
            return resultString;
        };
        return Plant;
    })(ForestObject);
    ForestObjects.Plant = Plant;

    var Animal = (function (_super) {
        __extends(Animal, _super);
        function Animal(id, isPoisonous, position, health, maxMoveRange, speed) {
            _super.call(this, id, isPoisonous, position);
            this.health = health;
            this.maxMoveRange = maxMoveRange;
            this.speed = speed;
        }
        Animal.prototype.toString = function () {
            var resultString = 'animal ' + _super.prototype.toString.call(this) + ', health: ' + this.health + ', speed: ' + this.speed;
            return resultString;
        };

        Animal.prototype.canEat = function (prey) {
            return false;
        };

        Animal.prototype.eat = function (prey) {
            if (prey.isPoisonous) {
                this.died();
            }
        };

        Animal.prototype.canMove = function (x, y) {
            return (Math.abs(x) <= this.maxMoveRange && Math.abs(y) <= this.maxMoveRange);
        };

        Animal.prototype.move = function (x, y) {
            if (this.canMove(x, y)) {
                this.position.x += x;
                this.position.y += y;
            } else {
                console.log(this.id + ' can\'t go move far.');
            }
        };
        return Animal;
    })(ForestObject);
    ForestObjects.Animal = Animal;

    var Carnivore = (function (_super) {
        __extends(Carnivore, _super);
        function Carnivore() {
            _super.apply(this, arguments);
        }
        Carnivore.prototype.toString = function () {
            var resultString = 'carnivore ' + _super.prototype.toString.call(this);
            return resultString;
        };

        Carnivore.prototype.canEat = function (prey) {
            if (prey instanceof Plant) {
                return false;
            } else if (prey instanceof Carnivore || prey instanceof Omnivore) {
                return this.health > prey.health;
            } else {
                return true;
            }
        };

        Carnivore.prototype.eat = function (prey) {
            if (this.canEat(prey)) {
                this.attack(prey);
            }

            _super.prototype.eat.call(this, prey);
        };

        Carnivore.prototype.attack = function (animal) {
            animal.health -= this.health; // Surprises the other animal and attacks first

            if (animal.health <= 0) {
                animal.died();
            } else if (animal instanceof Carnivore || animal instanceof Omnivore) {
                this.health -= animal.health;
            }

            if (this.health <= 0) {
                this.died();
            }
        };
        return Carnivore;
    })(Animal);
    ForestObjects.Carnivore = Carnivore;

    var Herbivore = (function (_super) {
        __extends(Herbivore, _super);
        function Herbivore() {
            _super.apply(this, arguments);
        }
        Herbivore.prototype.toString = function () {
            var resultString = 'herbivore ' + _super.prototype.toString.call(this);
            return resultString;
        };

        Herbivore.prototype.canEat = function (prey) {
            return (prey instanceof Plant);
        };

        Herbivore.prototype.eat = function (prey) {
            if (this.canEat(prey)) {
                prey.died();
            }

            _super.prototype.eat.call(this, prey);
        };

        Herbivore.prototype.canEscape = function (animal) {
            return this.speed > animal.speed;
        };
        return Herbivore;
    })(Animal);
    ForestObjects.Herbivore = Herbivore;

    var Omnivore = (function (_super) {
        __extends(Omnivore, _super);
        function Omnivore() {
            _super.apply(this, arguments);
        }
        Omnivore.prototype.toString = function () {
            var resultString = 'omnivore ' + _super.prototype.toString.call(this);
            return resultString;
        };

        Omnivore.prototype.attack = function (animal) {
            animal.health -= this.health; // Surprises the other animal and attacks first

            if (animal.health <= 0) {
                animal.died();
            } else if (animal instanceof Carnivore || animal instanceof Omnivore) {
                this.health -= animal.health;
            }

            if (this.health <= 0) {
                this.died();
            }
        };

        Omnivore.prototype.canEat = function (prey) {
            if (prey instanceof Plant || prey instanceof Herbivore) {
                return true;
            } else {
                return this.health > prey.health;
            }
        };

        Omnivore.prototype.eat = function (prey) {
            if (this.canEat(prey)) {
                this.attack(prey);
            }

            _super.prototype.eat.call(this, prey);
        };

        Omnivore.prototype.canEscape = function (animal) {
            return this.speed > animal.speed;
        };
        return Omnivore;
    })(Animal);
    ForestObjects.Omnivore = Omnivore;
})(ForestObjects || (ForestObjects = {}));
//# sourceMappingURL=ForestObjects.js.map
