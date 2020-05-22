export class Pheromone {
  _pheromones : number[];

  constructor(danger:number, food:number, recruit:number)  {
    //this._pheromones = new Array(3);
    this._pheromones = [danger, food, recruit];
  }
}