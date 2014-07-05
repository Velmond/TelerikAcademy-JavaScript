module Interfaces {
    export interface IMovable {
        canMove(x: number, y: number): boolean;
        move(x: number, y: number)
    }

    export interface IForestObject {
        id: string;
        isPoisonous: boolean;
        health: number;
        position: {x: number; y: number};
        toString(): string;
    }

    export interface IPlant extends IForestObject {
    }

    export interface IAnimal extends IForestObject {
        maxMoveRange: number;
        speed: number;
        canEat(prey: IForestObject): boolean;
        canMove(x:number, y:number): boolean;
        move(x:number, y:number)
        eat(prey: IForestObject)
    }

    export interface ICarnivore extends IAnimal {
        attack(IAnimal)
    }

    export interface IHerbivore extends IAnimal {
        canEscape(IAnimal): boolean;
    }

    export interface IOmnivore extends ICarnivore, IHerbivore {
    }
}