import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public successMsg: boolean = false;
  public success = false;
  public hero: any;

  contactDetails = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private appService: AppService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.hero = this.appService.getContentData('hero');
  }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle(
      ''
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        '',
    });
  }

  userDetails3 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    message: new FormControl(''),
  });

  submitContactForm() {
    let body = {
      ...this.userDetails3.value,
    };
    this.appService.contactformSubmission(body).subscribe((result) => {
      this.success = true;
    });
  }
}
