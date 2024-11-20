import { DatePipe, TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) { }

  transform(value: Date | string, format = 'MMMM yyyy'): string | null {
    const datePipe = new DatePipe(this.translateService.currentLang || 'en');
    // const titleCasePipe = new TitleCasePipe();
    // return titleCasePipe.transform(datePipe.transform(value, format));
    return datePipe.transform(value, format);
  }
}
