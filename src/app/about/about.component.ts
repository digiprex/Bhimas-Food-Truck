import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  ngOnInit(): void {
    this.meta.updateTag({ name: 'title', content: 'Top Best French Restaurant In Montreal | Mont Everest Masala' });
    this.meta.updateTag({ name: 'description', content: 'Experience the flavors of South Indian food at Mont Everest Masala, Montreals top spot for authentic dishes. Indulge in diverse veg and non-veg options today!' });
  }
  
  constructor(private meta: Meta, private title: Title) {
  }
}
