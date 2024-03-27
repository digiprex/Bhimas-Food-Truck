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
      "name": "Contact Us",
      "url": "/contact",
      "external": true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  change(comm: any) {
    this.close = comm;
  }
}

