import { Element } from "./logic/element";
import { Path } from "./logic/path";

export class Animal {
  _element : Element;
  _path : Path;
  _life : number[];
  _size : number;
  _damage : number;
  _hunger : number[]; 
  _thirst : number[];
  _is_travelling : number;

  constructor(element:Element, path:Path, actualLife:number, maxLife:number, size:number, damage:number, actualHunger:number, maxHunger:number, actualThirst:number, maxThirst:number, is_travelling:number) {
    this._element = element;
    this._path = path;
    this._life[0] = actualLife;
    this._life[1] = maxLife;
    this._size = size;
    this._damage = damage;
    this._hunger[0] = actualHunger;
    this._hunger[1] = maxHunger;
    this._thirst[0] = actualThirst;
    this._thirst[1] = maxThirst;
    this._is_travelling = is_travelling;
  }
}