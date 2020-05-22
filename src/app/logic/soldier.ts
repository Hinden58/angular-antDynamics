import { Ant } from "./ant";
import { Role } from "./role";
import { Anthill } from "./anthill";
import { Path } from "./path";
import { Element } from "./element";

export class Soldier extends Ant { 
  
  constructor(element:Element, path:Path, actual_life:number, max_life:number, size:number, damage:number, actual_hunger:number, max_hunger:number, actual_thirst:number, max_thirst:number, is_travelling:number, home:Anthill, actual_age:number, max_age:number, role:Role) {

    super(element, path, actual_life, max_life, size, damage, actual_hunger, max_hunger, actual_thirst, max_thirst, is_travelling, home, actual_age, max_age, role);
    
  }
}