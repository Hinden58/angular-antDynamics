 import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataRecoveryService} from './data-recovery.service'
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
  ants : any = [];

  constructor(
    private dr : DataRecoveryService,
  ) { }

  async ngOnInit() {
    await this.getData();
    console.log("log ants: "+this.ants)
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.showData();
  }

  async getData() {
    const tempData = await this.dr.getData()
    .toPromise();
    console.log(tempData);
    for (const d of (tempData as any)) {
      this.ants.push({
        x: d.x,
        y: d.y,
        code : d.code
      });
    }
    console.log(this.ants)
  }

  showData() {
    //console.log('Begin Draw');
    for (const d of (this.ants as any)) {
      //console.log('Next Draw')
      this.ctx.fillStyle = 'red';  
      const antImage = new AntImage(this.ctx); 
      antImage.draw(150, 150);  
      antImage.draw(d.x, d.y); 
    }
  }
}


export class AntImage {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number) {
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    this.ctx.ellipse(x, y, 2, 2, 0, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

