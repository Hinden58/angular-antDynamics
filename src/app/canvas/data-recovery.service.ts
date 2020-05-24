import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataRecoveryService {

  constructor(private http: HttpClient) { }

  dataUrl = 'assets/Test.json';

  getData() {
    return this.http.get(this.dataUrl);
  }
}
