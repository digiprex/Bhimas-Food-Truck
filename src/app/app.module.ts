import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestimonialsComponent } from './testimonials/testimonials.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    AboutComponent,
    BlogsComponent,
    PostsComponent,
    GalleryComponent,
    CartComponent,
    CheckoutComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
