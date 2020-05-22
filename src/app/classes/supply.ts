import { Element } from "./element"

export class Supply {
  _element : Element;
  _quantity : number;
  _type : number; //food = 1, water = -1

  constructor(element:Element, quantity:number, type:number) {
    this._element = element;
    this._quantity = quantity;
    this._type = type;
  }
}