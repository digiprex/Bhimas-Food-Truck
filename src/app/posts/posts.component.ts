import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public host: any = [];
  public blog: any;
  public hero: any;
  

  constructor(private appService: AppService, private meta: Meta, private title: Title) { 
    this.host = window.location.href.split('/');
    this.host = this.host[this.host.length - 1];
    this.hero = this.appService.getContentData('hero');
  }

  ngOnInit() {
    console.log(this.host)
  }
}
