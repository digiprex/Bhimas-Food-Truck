import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public close: any;
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
      "url": "/contact"
    },
    {
      "name": "Order Online",
      "url": "https://order.online/store/mont-everest-masala-montr%C3%A9al-872851/?delivery=true&hideModal=true&redirected=true",
      "external": true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  change(comm: any) {
    this.close = comm;
  }
}

