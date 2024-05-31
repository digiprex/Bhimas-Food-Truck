import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  constructor(private appService: AppService, private router: Router, private meta: Meta, private title: Title) { }
}
