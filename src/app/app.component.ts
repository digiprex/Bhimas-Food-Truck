import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public web: any;

  constructor(private appService: AppService) {

  }
  title = 'bhimas-food-truck-site';
}
