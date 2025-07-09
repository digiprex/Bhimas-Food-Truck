import { Component, Renderer2 } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public website: any;
  public sliderImage: any;
  public templatetype: any;
  public hero: any;

  constructor(private appService: AppService, private sanitizer: DomSanitizer, private router: Router, private formBuilder: FormBuilder, private renderer: Renderer2, private titleService: Title, private metaService: Meta) {
    this.templatetype = this.appService.getContentData('templatetype');
    this.hero = this.appService.getContentData('hero');
    this.sliderImage = this.appService.getContentData('slider');
  }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('');
    this.metaService.updateTag({ name: 'description', content: '' });
    this.metaService.updateTag({ name: 'google-site-verification', content: '' });
  }
}
