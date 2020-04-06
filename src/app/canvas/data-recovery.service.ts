import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataRecoveryService {

  constructor(private http: HttpClient) { }

  dataUrl = 'https://da2324e8.ngrok.io/sendjson/';

  recoverData() {
    return this.http.get<Data>(this.dataUrl);
  }

}

export interface Data {
  x: number;
  y: number;
}