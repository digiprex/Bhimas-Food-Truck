import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public website: any;
  public sliderImage: any;
  public templatetype: any;

  public services = [
    {
      "img": "../../assets/new_images/social-management-home.svg",
      "title": "Social Media Management",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/seo-home.svg",
      "title": "Search Engine Optimization",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/web-design-home.svg",
      "title": "Web Design + Development",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/sms-home.svg",
      "title": "SMS and Email Marketing",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/reputation-home.svg",
      "title": "Reputation Management",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/analytics-home.svg",
      "title": "Real Time Analytical Insights & Automated Reports",
      "cta": "/services"
    }
  ];

  ngOnInit(): void {
  }

  constructor() {
  }

  homesSliderImage = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3a63eefc-ff14-43cb-9b4b-9ffc0e0a464f_96-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3a63eefc-ff14-43cb-9b4b-9ffc0e0a464f_96-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/78f9fdc9-1965-444d-8608-ce3c6843095e_97-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/78f9fdc9-1965-444d-8608-ce3c6843095e_97-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/feee1caa-943a-4fed-b8c5-c8a2eeb11d26_94-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/feee1caa-943a-4fed-b8c5-c8a2eeb11d26_94-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/bf24b3b6-aeba-41d8-a861-079cf06fc2fa_95-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/bf24b3b6-aeba-41d8-a861-079cf06fc2fa_95-min.jpg",
      "title": "Mont Everest Masala"
    }
  ];

  imageUrls: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/726e3321-7545-46e3-bb53-2b77b107a3b0_1.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d5946320-c194-4eb8-841e-853eb3db74a0_2.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/03583aaa-61db-471b-b9ed-e6d623d82a1c_3.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/063b1689-d93f-4afe-8f11-7ee5b0b1758c_4.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/862d1247-5e52-4e17-804f-9326fe2e93d3_5.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a665e61f-aa5f-4d13-b8c0-14d4c7bcf98f_6.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8808eb0c-5bc2-4776-a2ad-a595d5f4dbb9_7.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/5dbc3eda-347a-4acc-8e9d-5797c2526b12_8.jpg'
  ];
}
