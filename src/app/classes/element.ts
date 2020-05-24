import { Animal } from "./animal";
import { Path } from "./path";

export class Element {
  _radius : number;
  _capacity_current : number;
  _capacity_max : number;
  _x : number;
  _y : number;
  _pheromone_danger: number ; 
  _pheromone_food : number; 
  _pheromone_recruit : number;
  _list_animal : Animal[];
  _list_path : Path[];
  _ctx : CanvasRenderingContext2D;

  constructor(radius:number, actual_capacity:number, max_capacity:number, x ,y , pheromone_danger:number , pheromone_food, pheromone_recruit, list_animal:Animal[], 
  list_path:Path[],
   ctx: CanvasRenderingContext2D) {
    this._radius = radius;
    this._capacity_current = actual_capacity;
    this._capacity_max = max_capacity;
    this._x = x;
    this._y = y;
    this._pheromone_danger = pheromone_danger;
    this._pheromone_food = pheromone_food;
    this._pheromone_recruit = pheromone_recruit;
    this._list_animal = list_animal;
    this._list_path = list_path;
    this._ctx = ctx;
  }

  draw():void {
    this._ctx.beginPath();
    this._ctx.arc(this._x, this._y, 30, 0, (Math.PI/180)*360, false);
    this._ctx.stroke();
    this._ctx.closePath();
  }
}