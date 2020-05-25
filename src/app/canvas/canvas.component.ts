 import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataRecoveryService} from './data-recovery.service'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Animal } from '../classes/animal';
import { Path } from '../classes/path';
import { Element } from '../classes/element';
import { Queen } from '../classes/queen';
import { Egg } from '../classes/egg';
import { Soldier } from '../classes/soldier';
import { Worker } from '../classes/worker';
import { Role } from '../classes/role';
import { componentFactoryResolverProviderDef } from '@angular/compiler/src/view_compiler/provider_compiler';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {

@ViewChild('canvas', { static: true }) 
  private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  //all simulation data
  ants : any = [];
  
  //Variable for update cycle
  interval;
  timeleft = 5;

  //simulation step Data
  listElem: Element[];
  listAnimal: Animal[];
  listPath: Path[];

  constructor(
    private dr : DataRecoveryService,
  ) { }

  async ngOnInit() {
    await this.getData();
    console.log(this.ants)
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.startTimer();
    //console.log("timer passed")
    //this.showData();
  }

  async getData() {
    try {
       const tempData = await this.dr.getData().toPromise();
       //console.log("Data : " + tempData)
       for (const d of (tempData as any)) {
        this.ants.push({
          __class__: d.__class__,
          _list_element: d.list_element,
          _list_anthill : d.list_anthill
        });
      }
    } catch (e) {
        console.error(e);
    }
    /*const tempData = await this.dr.getData().toPromise();
    for (const d of (tempData as any)) {
      this.ants.push({
        __class__: d.__class__,
        _list_element: d.list_element,
        _list_anthill : d.list_anthill
      });
    }*/
  }

  startTimer() {
    let i : number = 0;
    this.simulationStep(this.ants[i])
    this.interval = setInterval(() => {
      if(this.timeleft > 0) {
        this.timeleft--;
      } else {
        i++;
        this.timeleft = 5;
        //this.simulationStep(this.ants[i])
        //console.log(this.ants[i]);
        
      }
    },1000)
  }
  simulationStep(environment) {
    for(const d of environment._list_element){
      let animal_on_elem : Animal[] = [];
      let eid : number = d.id;
      let x : number = d.position.x;
      let y : number = d.position.y;
      //console.log(x + ", " +y)
      for(const a of d.list_animal){
        //TODO : Home, Path, Role
        switch(a.__class__){
          case("Queen"): { 
              let app =  a.__parent__.__parent__;
              let animal : Queen = new Queen(eid, x, y, 0, app.life, app.life_max,app.size,app.damage, app.hunger,app.hunger_max,app.thirst,app.thirst_max,app.is_travelling,"TODO",a.__parent__.age,a.__parent__.age_max,Role.ATTACK,this.ctx);
              animal_on_elem.concat(animal)
              animal.draw()
              console.log("Handeled : " + a.__class__) 
            break; 
          } 
          case("Egg"):{
             let app =  a.__parent__.__parent__;
             let animal : Egg = new Egg(eid, x, y, 0, app.life, app.life_max,app.size,app.damage, app.hunger,app.hunger_max,app.thirst,app.thirst_max,app.is_travelling,"TODO",a.__parent__.age,a.__parent__.age_max,Role.ATTACK,this.ctx);
             animal_on_elem.concat(animal)
             animal.draw()
             console.log("Handeled : " + a.__class__) 
            break;
          }
          case("Soldier"):{
            let app =  a.__parent__.__parent__;
             let animal : Soldier = new Soldier(eid, x, y, 0, app.life, app.life_max,app.size,app.damage, app.hunger,app.hunger_max,app.thirst,app.thirst_max,app.is_travelling,"TODO",a.__parent__.age,a.__parent__.age_max,Role.ATTACK,this.ctx);
             animal_on_elem.concat(animal)
             console.log(animal)
             animal.draw()
             console.log("Handeled : " + a.__class__) 
            break;
          }
          case("Worker"):{
            let app =  a.__parent__.__parent__;
             let animal : Worker = new Worker(eid, x, y, 0, app.life, app.life_max,app.size,app.damage, app.hunger,app.hunger_max,app.thirst,app.thirst_max,app.is_travelling,"TODO",a.__parent__.age,a.__parent__.age_max,Role.ATTACK,a.supply_capacity,this.ctx);
             animal_on_elem.concat(animal)
             console.log(animal)
             animal.draw()
             console.log("Handeled : " + a.__class__) 
            break;
          }
          default: { 
            console.log("Not handeled : " + a.__class__) 
            break; 
          } 
        }
      }
    }
  }
  showData() {
    //console.log('Begin Draw');
    for (const d of (this.ants as any)) {
      //console.log('Next Draw')
      this.ctx.fillStyle = 'red';  
      const antImage = new AntImage(this.ctx); 
      antImage.draw(d.x, d.y); 
    }
  }
}


export class AntImage {
  constructor(private _ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number) {
    this._ctx.fillStyle = 'red';
    this._ctx.beginPath();
    this._ctx.ellipse(x, y, 2, 2, 0, 0, 2 * Math.PI);
    this._ctx.fill();
  }

  drawQueen(x: number, y: number) {
    //this.ctx.fillStyle = 'fuchsia';
    //this.ctx.fillRect(x, y, 5, 5);
    this._ctx.beginPath();
    this._ctx.fillStyle = 'fuchsia';
    this._ctx.arc(x, y, 20, 0, (Math.PI/180)*360, false);
    //this.ctx.fill();
    this._ctx.stroke();
    this._ctx.fill();
    //this.ctx.closePath();
  }

  drawSoldier(x: number, y: number) {
    this._ctx.fillStyle = 'orange';
    this._ctx.fillRect(x, y, 3, 3);
  }

  drawWorker(x: number, y: number) {
    this._ctx.fillStyle = 'navy';
    this._ctx.fillRect(x, y, 3, 3);
  }


}

