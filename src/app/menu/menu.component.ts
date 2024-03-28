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
  public cart : any = [];

  constructor(private servicesService: ServicesService, private router: Router) {
    this.menu = this.servicesService.getContentData('menu')[0];
    this.categories = this.servicesService.getContentData('menu')[0].superCategory[0].category;
    this.host = this.host[this.host.length - 1];
  }
  ngOnInit(): void {
    this.getDiv(0, this.categories[0]);
  }

  cartPage() {
    this.router.navigate(['/cart']);
  }

  addQuantity(item: any) {
    item.quantity = item.quantity + 1;
  }
  subQuantity(item: any) {
    item.quantity = item.quantity < 1 ? 0 : item.quantity - 1;
  }

  addToCart(item : any, category : any) {
    localStorage.setItem('location', this.host)
    this.cart.push({
      categoryName: category.categoryName,
      itemName: item.itemName,
      itemIcon: item.icon,
      itemPrice: item.itemPrice,
      itemQuantity: item.quantity
    })
    localStorage.setItem('cart', JSON.stringify(this.cart));
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
