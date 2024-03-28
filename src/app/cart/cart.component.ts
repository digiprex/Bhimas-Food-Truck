import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public cart: any;
  public totalPrice = 0;

  constructor(private servicesService: ServicesService, private router: Router) { }

  // ngOnInit() {
  //   // this.cart = JSON.parse(localStorage.getItem('cart'));
  //   const cartItem = localStorage.getItem('cart');
  //   if (typeof cartItem === 'string') {
  //       this.cart = JSON.parse(cartItem);
  //       this.generateTotalPrice();

  //   } else {
  //     this.generateTotalPrice();
  //   }

  // }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') as string);
    this.generateTotalPrice();
  }

  async generateTotalPrice() {
    this.totalPrice = 0;
    for await (let item of this.cart) {
      console.log(item)
      this.totalPrice = this.totalPrice + (item.itemQuantity * item.itemPrice);
      this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
  }

  subQuantity(item: any, index: any) {

    if (item.itemQuantity !== 0) {
      this.cart[index].itemQuantity = this.cart[index].itemQuantity - 1;
      this.generateTotalPrice();
    }
  }

  addQuantity(index: any) {
    this.cart[index].itemQuantity = this.cart[index].itemQuantity + 1;
    this.generateTotalPrice();
  }

  removeItem(index: any) {
    this.cart.splice(index, 1);
    this.generateTotalPrice();
  }

  checkoutPage() {
    this.router.navigate(['/checkout']);
  }
}
