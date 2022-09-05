import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  langs = [
    {'code': 'en', 'label': '🇬🇧'},
    {'code': 'et', 'label': '🇪🇪'}];

  selectedLang!: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.ngOnInit();
  }

}
