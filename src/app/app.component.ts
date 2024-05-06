import { Component } from '@angular/core';
import { AppService } from './app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public web: any;

  constructor(private appService: AppService, public translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
    let browserLang: any;
    browserLang = translate.getBrowserLang();
    translate.use('fr');

  }
  title = 'Mont-Everest-Masala-Site';
}
