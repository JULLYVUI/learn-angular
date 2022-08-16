import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePath = '';

  pages = [
    {
      name: 'Tab 1',
      path: '/tabs/tab1'
    },
    {
      name: 'Tab 2',
      path: '/tabs/tab2'
    },
    {
      name: 'Tab 3',
      path: '/tabs/tab3'
    }
  ];
  constructor(private translate: TranslateService,private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  switchLanguage($event) {
    this.translate.use($event.target.value);
    console.log($event.target.value);
  }
}
