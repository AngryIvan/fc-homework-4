import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-settings',
  templateUrl: './content-settings.component.html',
  styleUrls: ['./content-settings.component.scss']
})
export class ContentSettingsComponent implements OnInit {
  @Output() checkBoxStatus = new EventEmitter();
  @Output() selectionChange = new EventEmitter();

  ngOnInit() {
  }

  onSelectionChange(selected) {
    this.selectionChange.emit(selected);
  }

  onCheckboxChecked(status) {
    this.checkBoxStatus.emit(status);
  }
}
