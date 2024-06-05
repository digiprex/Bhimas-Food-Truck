import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public successMsg: boolean = false;
  public success = false;

  contactDetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl("")
  });

  constructor(private appService: AppService, private router: Router, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'title', content: 'Contact Best Restaurant In Montreal | Mont Everest Masala | Reach Us Today' });
    this.meta.updateTag({ name: 'description', content: 'Mont Everest Masala in Montreal serves the best South Indian cuisine. Explore a menu brimming with veg and non-veg delights. Satisfaction awaits!' });
}

  montsubmitForm() {
    let body = {
      firstName: this.contactDetails.value.firstName,
      lastName: this.contactDetails.value.lastName,
      phone: this.contactDetails.value.phone,
      email: this.contactDetails.value.email,
      message: this.contactDetails.value.message
    }
    this.appService.contactformSubmission(body).subscribe(result => {
      this.success = true;
    });
  }
}
