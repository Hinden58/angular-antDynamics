import { Element } from "./element";
import { Ant } from "./ant";

export class Anthill {
  _name : string;
  _entrance_id : number[];
  _colony_id : number[];
  _storage_food : number;
  _storage_water : number

  constructor(name:string, entrance:number[], colony:number[], food_storage:number, water_storage:number) {
    this._name = name;
    this._entrance_id = entrance;
    this._colony_id = colony;
    this._storage_food = food_storage;
    this._storage_water = water_storage;
  }
}