import { Element } from "./element";
import { Anthill } from "./anthill";

export class Environment {
  _list_element : Element[];
  _list_anthill : Anthill[];

  constructor(list_element:Element[], list_anthill:Anthill[]) {
    this._list_element = list_element;
    this._list_anthill = list_anthill;
  }
}