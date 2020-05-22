import { Element } from "./element";
import { Path } from "./path";

export class Animal {
  _element : Element;
  _path : Path;
  _life : number[];
  _size : number;
  _damage : number;
  _hunger : number[]; 
  _thirst : number[];
  _is_travelling : number;
  _ctx : CanvasRenderingContext2D;

  constructor(element:Element, path:Path, actualLife:number, maxLife:number, size:number, damage:number, actualHunger:number, maxHunger:number, actualThirst:number, maxThirst:number, is_travelling:number,  ctx : CanvasRenderingContext2D) {
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
    this._ctx = ctx;
  }

  draw():void {
    this._ctx.beginPath();
    this._ctx.fillStyle = 'maroon';
    this._ctx.arc(this._element._position._x, this._element._position._y, 20, 0, (Math.PI/180)*360, false);this._ctx.stroke();
    this._ctx.fill();
  }
}