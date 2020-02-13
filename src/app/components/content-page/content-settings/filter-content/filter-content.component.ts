import { Component, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ContentSettingsService } from 'src/app/services/content-settings.service';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.scss']
})
export class FilterContentComponent {
  @Output() filterText = new EventEmitter();
  @ViewChild('filterInput', {static: false}) filterInput: ElementRef;

  constructor(private contentSettings: ContentSettingsService) {}

  onFilterSubmit() {
    this.contentSettings.setFilterWord(this.filterInput.nativeElement.value);
  }
}
