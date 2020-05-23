import { Element } from "./element";
import { Ant } from "./ant";

export class Anthill {
  _name : string;
  _entrance : Element[];
  _colony : Ant[];
  _storage_food : number;
  _storage_water : number

  constructor(name:string, entrance:Element[], colony:Ant[], food_storage:number, water_storage:number) {
    this._name = name;
    this._entrance = entrance;
    this._colony = colony;
    this._storage_food = food_storage;
    this._storage_water = water_storage;
  }
}