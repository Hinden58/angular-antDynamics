import { Element } from "./element";

export class Path {
  _start : Element;
  _end : Element;
  _cost : number;
  _capacity : number[];

  constructor(start:Element, end:Element, cost:number, actual_capacity:number, max_capacity:number){
    this._start = start;
    this._end = end;
    this._cost = cost;
    this._capacity[0] = actual_capacity;
    this._capacity[1] = max_capacity;
  }
}

