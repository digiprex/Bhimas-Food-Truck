import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public close: any;
  public brandName: any;
  public isdropDownOpen = false;
  isDropdownOpen = false;
  showTopBar = true;
  isScrolled = false;
  isNavbarHidden = false;
  lastScrollTop = 0;

  public links = [
    {
      name: 'Home',
      url: '/home',
      type: 'internal',
      options: [],
    },
    {
      name: 'Menu',
      url: '/menutwo/all',
      type: 'internal',
      options: [],
    },
    {
      name: 'About Us',
      url: '/about-us',
      type: 'internal',
      options: [],
    },
    {
      name: 'Contact Us',
      url: '/contact-us',
      type: 'internal',
      options: [],
    },
    {
      name: 'Service',
      url: '/service/all',
      type: 'internal',
      options: [],
    },
    {
      name: 'Order Online',
      url: '',
      type: 'external',
      options: [],
    }
  ];

  constructor(private appService: AppService) {
    this.brandName = this.appService.getContentData('brandName');
  }

  ngOnInit(): void {}

  change(comm: any) {
    this.close = comm;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = offset > 50; // (Optional for other purposes)
    this.isNavbarHidden = offset > 0;
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const topBar = document.getElementById('top-bar');

    if (!this.showTopBar) return;

    if (currentScroll > this.lastScrollTop) {
      // scrolling down
      if (topBar) topBar.style.top = '-50px';
    } else {
      // scrolling up
      if (topBar) topBar.style.top = '0';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const insideNavbar = target.closest('.navbar-nav');
    if (!insideNavbar) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  closeTopBar() {
    this.showTopBar = false;
  }
}
