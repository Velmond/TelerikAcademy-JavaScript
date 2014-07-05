// 01. *Create a class hierarchy by your choice with TypeScript
//     consisting of the following:
//   - At least 2 modules
//   - At least 3 interfaces
//   - At least 6 classes
//   - At least 2 uses of inheritance
//   - At least 12 methods
//   - At least one generic use
//   - At least one static use
//   - Everything should be strongly typed
var poisonousShrub = new ForestObjects.Plant('01', true, { x: 12, y: 23 });
var nonPoisonousShrub = new ForestObjects.Plant('02', false, { x: 2, y: 13 });

var shrubs = [
    new ForestObjects.Plant('03', true, { x: 10, y: 13 }),
    new ForestObjects.Plant('04', false, { x: 22, y: 33 }),
    new ForestObjects.Plant('05', false, { x: 5, y: 28 }),
    new ForestObjects.Plant('06', true, { x: 1, y: 26 }),
    new ForestObjects.Plant('07', false, { x: 25, y: 17 }),
    new ForestObjects.Plant('08', false, { x: 32, y: 16 })
];
var wolf = new ForestObjects.Carnivore('09', false, { x: 2, y: 32 }, 50, 10, 10);
var snake = new ForestObjects.Carnivore('10', true, { x: 12, y: 12 }, 20, 3, 4);
var bear = new ForestObjects.Omnivore('11', false, { x: 21, y: 3 }, 100, 6, 2);
var boar = new ForestObjects.Omnivore('12', false, { x: 34, y: 15 }, 30, 5, 5);
var deer = new ForestObjects.Herbivore('13', false, { x: 7, y: 23 }, 50, 9, 9);
var squirrel = new ForestObjects.Herbivore('14', false, { x: 16, y: 10 }, 10, 3, 3);

var forestElements = [poisonousShrub, nonPoisonousShrub];
for (var i = 0, len = shrubs.length; i < len; i += 1) {
    forestElements.push(shrubs[i]);
}

forestElements.push(wolf, snake, bear, boar, deer, squirrel);
var forest = new Forest(forestElements);

console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Can wolf (id#09) move 10 spaces in x, and -10 in y direction: ' + wolf.canMove(10, -10));
console.log('Moving wolf (id#09) (+10,-10).');
wolf.move(10, -10);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Can wolf (id#09) eat snake (id#10)? ' + (wolf.canEat(snake) ? 'YES' : 'NO'));
console.log('wolf (id#09) attacks snake (id#10). wolf (id#09) should take no damage. snake (id#10) should die.');
wolf.attack(snake);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Add snake (id#10) back for testing purposes.');
snake = new ForestObjects.Carnivore('08', true, { x: 12, y: 12 }, 20, 3, 4);
forest.allObjects.push(snake);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Can snake (id#10) eat wolf? ' + (snake.canEat(wolf) ? 'YES' : 'NO'));
console.log('snake (id#10) attacks wolf (id#09). wolf (id#09) should take damage. snake (id#10) should die.');
snake.attack(wolf);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Add snake (id#10) back.');
snake = new ForestObjects.Carnivore('08', true, { x: 12, y: 12 }, 20, 3, 4);
forest.allObjects.push(snake);
console.log('wolf (id#09) eats snake (id#10). Both should die.');
wolf.eat(snake);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Deer (id#13) eats a non-poisonous shrub (id#02). Shrub should die.');
deer.eat(nonPoisonousShrub);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
console.log('');
console.log('Deer (id#13) eats a poisonous shrub (id#01). Both should die.');
deer.eat(poisonousShrub);
forest.updateForest();
console.log('Forest: \n' + forest.toString());
//# sourceMappingURL=app.js.map
