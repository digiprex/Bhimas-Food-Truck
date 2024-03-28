import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: any;
  public categories: any;
  public selectedCategory: any;
  public product: any;
  public host: any = [];

  constructor(private servicesService: ServicesService, private router: Router) {
    this.menu = this.servicesService.getContentData('menu')[0];
    this.categories = this.servicesService.getContentData('menu')[0].superCategory[0].category;
  }
  ngOnInit(): void {
  }


  getDiv(index: any, item: any) {
    if (item.items.length) {
      this.product = item;
      this.selectedCategory = index;
      this.router.navigate([`/menu/${this.host}`], { fragment: item.routeName });
    } else {
      this.product = undefined;
      this.selectedCategory = index;
      this.router.navigate([`/menu/${this.host}`]);
    }

  }
}
