import { Injectable } from '@angular/core';
import * as monteverestcomData from '../assets/data/monteverest.com.json';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public data: any;
  public apiUrl =
    'https://yejrescws7.execute-api.ap-south-1.amazonaws.com/staging';

  constructor(private http: HttpClient) {
    this.data = monteverestcomData;
  }

  getContentData(key: string): any {
    return this.data[key];
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

  contactFormSubmission(data: any): Observable<any> {
    let requestBody = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message
    };
    return this.http.post(
      `https://submit-form.com/yv1cmUhty`,
      requestBody
    );
  }
}
