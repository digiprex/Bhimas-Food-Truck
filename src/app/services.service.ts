import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public data: any;
  public formCode = "yv1cmUhty";
  public apiUrl =
    'https://yejrescws7.execute-api.ap-south-1.amazonaws.com/staging';

  constructor(private http: HttpClient) {

  }

  cartCheckout(data: any): Observable<any> {
    let requestBody = {
      user: data.user,
      cart: data.cart,
      restaurantName: data.restaurantName,
      restaurantEmail: data.restaurantEmail,
      restaurantPhone: data.restaurantPhone,
      totalCartValue: data.totalCartValue,
    };
    return this.http.post(`${this.apiUrl}/checkout/checkout`, requestBody);
  }

  montSubmission(data: any): Observable<any> {
    let requestBody = {
      fullName: data.firstName,
      phone: data.phone,
      email: data.email,
      message: data.message,
      type: 'Contact Us',
    };
    return this.http.post(
      `https://submit-form.com/${this.formCode}`,
      requestBody
    );
  }
}
