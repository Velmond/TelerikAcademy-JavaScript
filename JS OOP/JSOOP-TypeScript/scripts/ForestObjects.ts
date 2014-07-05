module ForestObjects {
    class ForestObject implements Interfaces.IForestObject {
        id:string;
        position:{x: number; y: number};
        isPoisonous:boolean;
        health:number;
        isDead:boolean = false;

        constructor(id:string, isPoisonous:boolean, position:{x: number; y: number}) {
            this.id = id;
            this.isPoisonous = isPoisonous;
            this.position = {
                x: position.x,
                y: position.y
            };
        }

        toString():string {
            var resultString = 'id#' + this.id + ', ' + (this.isPoisonous ? 'poisonous' : 'not poisonous');
            return resultString;
        }

        died() {
            this.health = 0;
            this.isDead = true;
        }
    }

    export class Plant extends ForestObject implements Interfaces.IPlant {
        constructor(id:string, isPoisonous:boolean, position:{x: number; y: number}) {
            super(id, isPoisonous, position);
        }

        toString():string {
            var resultString = 'plant ' + super.toString();
            return resultString;
        }
    }

    export class Animal extends ForestObject implements Interfaces.IAnimal, Interfaces.IMovable {
        health:number;
        maxMoveRange:number;
        speed:number;

        constructor(id:string, isPoisonous:boolean, position:{x: number; y: number}, health:number, maxMoveRange:number, speed:number) {
            super(id, isPoisonous, position);
            this.health = health;
            this.maxMoveRange = maxMoveRange;
            this.speed = speed;
        }

        toString():string {
            var resultString = 'animal ' + super.toString() + ', health: ' + this.health + ', speed: ' + this.speed;
            return resultString;
        }

        canEat(prey:Interfaces.IForestObject):boolean {
            return false;
        }

        eat(prey:Interfaces.IForestObject) {
            if (prey.isPoisonous) {
                this.died();
            }
        }

        canMove(x:number, y:number):boolean {
            return (Math.abs(x) <= this.maxMoveRange && Math.abs(y) <= this.maxMoveRange);
        }

        move(x:number, y:number) {
            if (this.canMove(x, y)) {
                this.position.x += x;
                this.position.y += y;
            } else {
                console.log(this.id + ' can\'t go move far.')
            }
        }
    }

    export class Carnivore extends Animal implements Interfaces.ICarnivore {
        toString():string {
            var resultString = 'carnivore ' + super.toString();
            return resultString;
        }

        canEat(prey:Interfaces.IForestObject):boolean {
            if (prey instanceof Plant) {
                return false;
            } else if (prey instanceof Carnivore ||
                prey instanceof Omnivore) {
                return this.health > prey.health;
            } else {
                return true;
            }
        }

        eat(prey:Interfaces.IForestObject) {
            if (this.canEat(prey)) {
                this.attack(prey);
            }

            super.eat(prey);
        }

        attack(animal:Interfaces.IAnimal) {
            animal.health -= this.health;   // Surprises the other animal and attacks first

            if (animal.health <= 0) {
                animal.died();
            } else if (animal instanceof Carnivore || animal instanceof Omnivore) {
                this.health -= animal.health;
            }

            if (this.health <= 0) {
                this.died();
            }
        }
    }

    export class Herbivore extends Animal implements Interfaces.IHerbivore {
        toString():string {
            var resultString = 'herbivore ' + super.toString();
            return resultString;
        }

        canEat(prey:Interfaces.IForestObject):boolean {
            return (prey instanceof Plant);
        }

        eat(prey:Interfaces.IForestObject) {
            if (this.canEat(prey)) {
                prey.died();
            }

            super.eat(prey);
        }

        canEscape(animal:Interfaces.IAnimal):boolean {
            return this.speed > animal.speed;
        }
    }

    export class Omnivore extends Animal implements Interfaces.IOmnivore {
        toString():string {
            var resultString = 'omnivore ' + super.toString();
            return resultString;
        }

        attack(animal:Animal) {
            animal.health -= this.health;   // Surprises the other animal and attacks first

            if (animal.health <= 0) {
                animal.died();
            } else if (animal instanceof Carnivore || animal instanceof Omnivore) {
                this.health -= animal.health;
            }

            if (this.health <= 0) {
                this.died();
            }
        }

        canEat(prey:Interfaces.IForestObject):boolean {
            if (prey instanceof Plant || prey instanceof Herbivore) {
                return true;
            } else {
                return this.health > prey.health;
            }
        }

        eat(prey:Interfaces.IForestObject) {
            if (this.canEat(prey)) {
                this.attack(prey);
            }

            super.eat(prey);
        }

        canEscape(animal:Interfaces.IAnimal):boolean {
            return this.speed > animal.speed;
        }
    }
}
