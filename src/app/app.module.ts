import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';

import localeEn from '@angular/common/locales/en';
import localeEt from '@angular/common/locales/et';

registerLocaleData(localeEn);
registerLocaleData(localeEt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumeComponent,
    LocalizedDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
    HttpClient,
    { provide: LOCALE_ID, useValue: 'et-EE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
