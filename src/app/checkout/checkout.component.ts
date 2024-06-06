import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  public contact: any;
  public cart: any;
  public totalPrice = 0;
  public successMsg: boolean = false;

  userDetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    country: new FormControl(""),
    pincode: new FormControl(""),
    otp: new FormControl("")
  });

  constructor(private appService: AppService, private router: Router) { }
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string);
    this.totalPrice = JSON.parse(localStorage.getItem('totalPrice') as string);
  }

  checkout() {
    let loc = localStorage.getItem('location');

    let body = {
      user: {
        firstName: this.userDetails.value.firstName,
        lastName: this.userDetails.value.lastName,
        phone: this.userDetails.value.phone,
        email: this.userDetails.value.email,
        address: this.userDetails.value.address,
        city: this.userDetails.value.city,
        state: this.userDetails.value.state,
        country: this.userDetails.value.country,
        pincode: this.userDetails.value.pincode
      },
      cart: this.cart,
      restaurantName: "Mont Everest Masala",
      restaurantEmail: "utkarsh.malviya@gkcfood.com",
      restaurantPhone: "(514) 521-6999",
      totalCartValue: this.totalPrice
    }
    console.log(body);
    this.appService.cartCheckout(body).subscribe((res: any) => {
      this.successMsg = true;
      localStorage.clear();
    })
  }
}
