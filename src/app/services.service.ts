import { Injectable } from '@angular/core';
import * as monteverestcomData from '../assets/data/monteverest.com.json';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public data: any;

  constructor() {
    this.data = monteverestcomData;
  }

  getContentData(key: string): any {
    return this.data[key];
  }
}
