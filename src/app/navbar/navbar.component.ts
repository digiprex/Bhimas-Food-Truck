import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public close: boolean = false;
  public brandName: string = '';
  public isDropdownOpen = false;
  public showTopBar = true;
  public isScrolled = false;
  public isNavbarHidden = false;
  private lastScrollTop = 0;

  public links = [
    { name: 'Home', url: '/home', type: 'internal' },
    { name: 'Menu', url: '/menu', type: 'internal' },
    { name: 'About Us', url: '/about', type: 'internal' },
    { name: 'Contact Us', url: '/contact', type: 'internal' },
    { name: 'Service', url: '/post/all', type: 'internal' },
    { name: 'Order Online', url: '/', type: 'internal' },
  ];

  constructor(private appService: AppService) {
    this.brandName = this.appService.getContentData('brandName');
  }

  ngOnInit(): void {}

  change(value: boolean) {
    this.close = value;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  closeTopBar() {
    this.showTopBar = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop || 0;

    this.isScrolled = currentScroll > 50;
    this.isNavbarHidden = currentScroll > 0;

    const topBar = document.getElementById('top-bar');
    if (this.showTopBar && topBar) {
      topBar.style.top = currentScroll > this.lastScrollTop ? '-50px' : '0';
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
}
