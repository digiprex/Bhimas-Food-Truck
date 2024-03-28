import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageUrls: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/726e3321-7545-46e3-bb53-2b77b107a3b0_1.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d5946320-c194-4eb8-841e-853eb3db74a0_2.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/03583aaa-61db-471b-b9ed-e6d623d82a1c_3.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/063b1689-d93f-4afe-8f11-7ee5b0b1758c_4.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/862d1247-5e52-4e17-804f-9326fe2e93d3_5.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a665e61f-aa5f-4d13-b8c0-14d4c7bcf98f_6.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8808eb0c-5bc2-4776-a2ad-a595d5f4dbb9_7.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/5dbc3eda-347a-4acc-8e9d-5797c2526b12_8.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/752c529f-5234-4801-be9a-3ab8d497754f_9.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6a9223bd-d327-481a-8232-f77599d377c0_10.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/78c1b507-14ed-459f-a382-a9de63aa3e93_11.jpg'
  ];
}
