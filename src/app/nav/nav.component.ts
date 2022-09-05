import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  langs = ['en', 'et'];
  selectedLang!: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    // window.location.reload();
  }

}
