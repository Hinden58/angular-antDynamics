import { Anthill } from "./anthill";
import { Animal } from "./animal";
import { Role } from "./role";
import { Element } from "./element";
import { Path } from "./path";

export class Ant extends Animal {
  _home : string;
  _age_max : number;
  _age_current : number
  _role : Role;

  constructor(element:number, x:number, y:number,
   path:number,
   actualLife:number, maxLife:number, size:number, damage:number, actualHunger:number, maxHunger:number, actualThirst:number, maxThirst:number, is_travelling:number, home:string, actual_age:number, max_age:number, role:Role, ctx : CanvasRenderingContext2D)
  {
    super(element, x, y,
    path, 
    actualLife, maxLife,size, damage, actualHunger, maxHunger, actualThirst, maxThirst, is_travelling, ctx);
    this._home = home;
    this._age_current = actual_age;
    this._age_max = max_age;
    this._role = role;
  }
}