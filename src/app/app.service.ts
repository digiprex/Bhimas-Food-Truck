import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as bhimasfoodtruckomData from 'bhimasfoodtruck.com.json';
@Injectable({
  providedIn: 'root'
})

export class AppService {
  public apiUrl = 'https://yejrescws7.execute-api.ap-south-1.amazonaws.com/staging';
  public data = bhimasfoodtruckomData;
  constructor(private http: HttpClient) { }

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

  contactformSubmission(data: any): Observable<any> {
    let requestBody = {
      ...data,
      type: 'Contact Us'
    };
    return this.http.post(
      `https://submit-form.com/yv1cmUhty`, requestBody
    );
  }

  getContentData(key: any) : any{
    console.log("data",(this.data as any)[key]);
    return (this.data as any)[key];
  }
}
