
import { Pipe, PipeTransform } from '@angular/core';
import { ContentSettingsService } from '../services/content-settings.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor(private contentSettings: ContentSettingsService) {}

  transform(value: any[]): any[] {
    const criterion = this.contentSettings.getFilterWord();
    return criterion ? value.filter(item => item.title.toUpperCase().startsWith(criterion.toUpperCase())) : value;
  }

}
