import { Component, Renderer2 } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public website: any;
  public sliderImage: any;
  public templatetype: any;
  public hero: any;

  ngOnInit(): void {
    this.meta.updateTag({ name: 'title', content: 'Best South Indian Food In Montreal | Mont Everest Masala' });
    this.meta.updateTag({ name: 'description', content: 'Savor the finest South Indian cuisine at Mont Everest Masala in Montreal. Discover a delectable blend of veg and non-veg specialties. Taste excellence!' });
  }

  // constructor() {
  // }

  constructor(private appService: AppService, private sanitizer: DomSanitizer, private router: Router, private formBuilder: FormBuilder, private renderer: Renderer2, private meta: Meta, private title: Title) {
    this.templatetype = this.appService.getContentData('templatetype');
    this.hero = this.appService.getContentData('hero');
  }

  homesSliderImage = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/478d96cb-6a39-4b99-a8a5-8ca0e7202b22_2%20%281%29-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/478d96cb-6a39-4b99-a8a5-8ca0e7202b22_2%20%281%29-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2892d88e-ba6e-4c6e-90ea-804d3a5cb74c_5-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2892d88e-ba6e-4c6e-90ea-804d3a5cb74c_5-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f44cf1f7-a28f-4e34-a907-75e4daa796ca_3%20%281%29-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f44cf1f7-a28f-4e34-a907-75e4daa796ca_3%20%281%29-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/50ea943d-5ca8-4b6d-bc98-b4a5d38ca542_4%20%281%29-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/50ea943d-5ca8-4b6d-bc98-b4a5d38ca542_4%20%281%29-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/000a57f3-494f-4c43-8223-8fb6c0af63d6_798d6035-8eab-4eaa-b398-7d0d24e559fe-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/000a57f3-494f-4c43-8223-8fb6c0af63d6_798d6035-8eab-4eaa-b398-7d0d24e559fe-min.jpg",
      "title": "Mont Everest Masala"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1f015e93-b52e-4d04-a85d-ca6212defeb7_1%20%281%29-min.jpg",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1f015e93-b52e-4d04-a85d-ca6212defeb7_1%20%281%29-min.jpg",
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
