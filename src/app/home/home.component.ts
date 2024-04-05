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

  ngOnInit(): void {
  }

  constructor() {
  }

  homesSliderImage = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f017f08c-e79d-4d1b-a186-0a7d1d2f8f87_1.jpeg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f017f08c-e79d-4d1b-a186-0a7d1d2f8f87_1.jpeg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0e63bb92-976d-4cd9-a6fa-3a52c2775342_2.jpeg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0e63bb92-976d-4cd9-a6fa-3a52c2775342_2.jpeg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0c0f148f-4204-490d-91a5-844925a9ab54_3.jpeg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0c0f148f-4204-490d-91a5-844925a9ab54_3.jpeg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7bf3dca5-1c78-4e10-9107-1c06a475f39b_4.jpeg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7bf3dca5-1c78-4e10-9107-1c06a475f39b_4.jpeg",
      "title": "Mont Everest Masala"
    }
  ];

  services = [
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

  galleryImages: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8b75ad7d-d689-468f-b8f9-1293f486461d_g1-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8298b8e6-51fb-4caf-9d2e-7849ec9970b3_g2-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fec10328-001e-499c-8425-de843aa34b6c_g3-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8624cae1-e426-4740-be47-298dca4543d8_g4-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ed268b16-63bc-44fe-816f-411812e5e1b5_g5-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b9b5411b-498a-42b8-a031-d3f2b2a6dbf0_g6-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/03dd14b2-e3ce-4cc5-a9d9-a18720479f16_g7-min.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/567fe314-3358-47d6-866b-9c5d860ddb08_g8-min.jpg'
  ];

  dishes = [
    {
      "img": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/9e883c95-3303-4a18-8471-20ef470fde46_naan.jpg",
      "title": "Garlic Naan",
      "price": "CA$4.50"
    },
    {
      "img": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6c6839b1-55e1-48b5-bc54-8653aa87b619_shake.jpg",
      "title": "Mango Milk Shake",
      "price": "CA$4.99"
    },
    {
      "img": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7b1dd4f8-7b65-4143-96b2-8bdbbbaa6b58_chicjen.jpg",
      "title": "Fish Curry",
      "price": "CA$20.99"
    },
    {
      "img": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/60a4b55f-0191-49b2-a412-5c344fb036ac_booti.jpg",
      "title": "LAMB VINDALOO",
      "price": "CA$20.99"
    }
  ]
}
