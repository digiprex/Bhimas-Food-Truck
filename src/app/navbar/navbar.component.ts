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
      "url": "/contact",
      "external": false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  change(comm: any) {
    this.close = comm;
  }
}

