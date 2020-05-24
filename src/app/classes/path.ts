
export class Path {
  _start : number;
  _end : number;
  _cost : number;
  _capacity : number[];

  constructor(start:number, end:number, cost:number, actual_capacity:number, max_capacity:number){
    this._start = start;
    this._end = end;
    this._cost = cost;
    this._capacity[0] = actual_capacity;
    this._capacity[1] = max_capacity;
  }
}

