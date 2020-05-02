 import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataRecoveryService, Data } from './data-recovery.service'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {

@ViewChild('canvas', { static: true }) 
  private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private ants : Data

  constructor(
    private dr : DataRecoveryService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getData();
    console.log(this.ants);
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.showData();
  }

  getData() : Observable<Case[]> {
    return this.http
        .get(`assets/data.json/environment/list_element`)
        .pipe(map(result=>result['list_element']))
  }

  showData() {
    //const id = requestAnimationFrame(this.animate);  
    // Do stuff  
    this.ctx.fillStyle = 'red';  
    const antImage = new AntImage(this.ctx); 
    antImage.draw(150, 150);  
    antImage.draw(this.ants.x, this.ants.y); 
  }
}

export class Case{
        radius;
        capacity_oqp;
        capacity_max;
        x;
        y;
        ph1;
        ph2;
        ph3;
}

export class AntImage {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number) {
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.ellipse(x, y, 2, 2, 0, 0, 2 * Math.PI);
    this.ctx.fill();
  }
  drawA(a : Data) {
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.ellipse(a.x, a.y, 2, 2, 0, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

