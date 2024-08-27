import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Top Best French Restaurant In Montreal | Mont Everest Masala');
    this.metaService.updateTag({ name: 'description', content: 'Experience the flavors of South Indian food at Mont Everest Masala, Montreals top spot for authentic dishes. Indulge in diverse veg and non-veg options today!' });
  }
}
