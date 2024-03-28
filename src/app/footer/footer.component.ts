import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public links = [
    {
      "name": "Home",
      "url": "/home"
    },
    {
      "name": "About Us",
      "url": "/about"
    },
    {
      "name": "Menu",
      "url": "/menu"
    },
    {
      "name": "Gallery",
      "url": "/gallery"
    },
    {
      "name": "Contact Us",
      "url": "/contact",
      "external": true
    },
  ];
}
