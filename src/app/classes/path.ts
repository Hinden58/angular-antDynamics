
export class Path {
  _pid : number
  _start : number;
  _end : number;
  _cost : number;
  _capacity_current : number;
  _capacity_max : number

  constructor(pid: number, start:number, end:number, cost:number, actual_capacity:number, max_capacity:number){
    this._pid = pid
    this._start = start;
    this._end = end;
    this._cost = cost;
    this._capacity_current = actual_capacity;
    this._capacity_max = max_capacity;
  }
}

