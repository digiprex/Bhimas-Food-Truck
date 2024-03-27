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

  constructor (){
  }

  homesSliderImage = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a8e762bd-aee0-452f-b1fb-16577d3df282_97.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a8e762bd-aee0-452f-b1fb-16577d3df282_97.jpg"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62cbcbb8-de01-4caa-8832-d49d84e7eeb0_94.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62cbcbb8-de01-4caa-8832-d49d84e7eeb0_94.jpg"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/caae64bf-2ccc-419d-9689-1f81fca9fe41_95.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/caae64bf-2ccc-419d-9689-1f81fca9fe41_95.jpg"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f05593ed-d6c4-4a1d-bf19-759cd17b3732_96.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f05593ed-d6c4-4a1d-bf19-759cd17b3732_96.jpg"
    }
  ];
}
