import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageUrls: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6d26126e-3e4c-4ea2-a9ac-f73856b5ece8_11.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ed05d82c-3283-4105-85a4-dd1401a70d0f_10.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1791c7ae-ab17-4fd3-bc5a-177d95920025_9.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f240e707-e582-40da-8e89-ee4d8f1ed7f5_8.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b711c04a-25bc-4bc2-967d-f5c66211b496_7.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a2f5a607-5b4b-4134-93eb-7f4fa5bb8a1f_6.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/cfcdb294-1dd3-46e4-a9ad-51107fa0fffe_5.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/06f3863a-1f0b-46e7-9696-77961762760f_4.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/54e87998-7887-49ee-9afc-1570da1f7909_3.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c0a23738-b91e-4ac4-9c72-08063a07d8a9_2.jpeg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/697d2028-da0e-4506-b008-7d8709614ffb_1.jpeg'
  ];
}
