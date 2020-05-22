import { Position } from "./position";
import { Pheromone } from "./pheromone";
import { Animal } from "./animal";
import { Path } from "./path";

export class Element {
  _radius : number;
  _capacity : number[];
  _position : Position;
  _pheromone : Pheromone;
  _list_animal : Animal[];
  _list_path : Path[];
  _ctx : CanvasRenderingContext2D;

  constructor(radius:number, actual_capacity:number, max_capacity:number, position:Position, pheromone:Pheromone, list_animal:Animal[], list_path:Path[], ctx: CanvasRenderingContext2D) {
    this._radius = radius;
    this._capacity[0] = actual_capacity;
    this._capacity[1] = max_capacity;
    this._position = position;
    this._pheromone = pheromone;
    this._list_animal = list_animal;
    this._list_path = list_path;
    this._ctx = ctx;
  }

  draw():void {
    this._ctx.beginPath();
    this._ctx.arc(this._position._x, this._position._y, 30, 0, (Math.PI/180)*360, false);
    this._ctx.stroke();
    this._ctx.closePath();
  }
}