import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  labelPosition = 'after';
  disabled = false;
  @Output() checkBoxChecked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCheck() {
    console.log(!this.checked)
    this.checkBoxChecked.emit(!this.checked);
  }

}
