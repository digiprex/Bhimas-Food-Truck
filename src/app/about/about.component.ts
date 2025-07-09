import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public hero: any;

  constructor(private appService: AppService, private titleService: Title, private metaService: Meta) { 
    this.hero = this.appService.getContentData('hero');
  }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('');
    this.metaService.updateTag({ name: 'description', content: '' });
  }
}
