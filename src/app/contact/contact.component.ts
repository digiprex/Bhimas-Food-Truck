import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public success = false;

  userdetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    message: new FormControl()
  });

  constructor(private appService: ServicesService) { }

  contactFormSubmission() {
    let body = {
      firstName: this.userdetails.value.firstName,
      lastName: this.userdetails.value.lastName,
      email: this.userdetails.value.email,
      phone: this.userdetails.value.phone,
      message: this.userdetails.value.message
    }
    this.appService.contactFormSubmission(body).subscribe(result => {
      this.success = true;
    });
  }
}
