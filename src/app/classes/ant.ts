import { Anthill } from "./anthill";
import { Animal } from "./animal";
import { Role } from "./role";
import { Element } from "./element";
import { Path } from "./path";

export class Ant extends Animal {
  _home : Anthill;
  _age : number[];
  _role : Role;

  constructor(element:Element, path:Path, actual_life:number, max_life:number, size:number, damage:number, actual_hunger:number, max_hunger:number, actual_thirst:number, max_thirst:number, is_travelling:number, home:Anthill, actual_age:number, max_age:number, role:Role, ctx : CanvasRenderingContext2D)
  {
    super(element, path, actual_life, max_life,size, damage, actual_hunger, max_hunger, actual_thirst, max_thirst, is_travelling, ctx);
    this._home = home;
    this._age[0] = actual_age;
    this._age[1] = max_age;
    this._role = role;
  }
}