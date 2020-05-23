import { Element } from "./element";
import { Path } from "./path";

export class Animal {
  _element_id: number;
  _x;
  _y;
  //_path : Path;
  _life_current : number;
  _life_max : number;
  _size : number;
  _damage : number;
  _hunger_current : number;
  _hunger_max : number;
  _thirst_current : number;
  _thirst_max : number;
  _is_travelling : number;
  _ctx : CanvasRenderingContext2D;

  constructor(element:number, x, y,
  //path:Path,
   actualLife:number, maxLife:number, size:number, damage:number, actualHunger:number, maxHunger:number, actualThirst:number, maxThirst:number, is_travelling:number,  ctx : CanvasRenderingContext2D) {
    this._element_id = element;
    this._x = x;
    this._y = y;
    //this._path = path;
    this._life_current = actualLife;
    this._life_max = maxLife;
    this._size = size;
    this._damage = damage;
    this._hunger_current = actualHunger;
    this._hunger_max = maxHunger;
    this._thirst_current = actualThirst;
    this._thirst_max = maxThirst;
    this._is_travelling = is_travelling;
    this._ctx = ctx;
  }

  draw():void {
    this._ctx.beginPath();
    this._ctx.fillStyle = 'maroon';
    this._ctx.arc(this._x, this._y, 20, 0, (Math.PI/180)*360, false);this._ctx.stroke();
    this._ctx.fill();
  }
}