import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-settings',
  templateUrl: './content-settings.component.html',
  styleUrls: ['./content-settings.component.scss']
})
export class ContentSettingsComponent implements OnInit {

  constructor() { }
  @Output() checkBoxStatus = new EventEmitter();

  ngOnInit() {
  }

  onCheckboxChecked(status) {
    this.checkBoxStatus.emit(status);
  }
}
