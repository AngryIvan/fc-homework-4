import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-source',
  templateUrl: './select-source.component.html',
  styleUrls: ['./select-source.component.scss']
})
export class SelectSourceComponent {
  sources: any = [
    {value: 'steak-0', viewValue: 'BBC'},
    {value: 'pizza-1', viewValue: 'Cointelegraph.com'},
    {value: 'tacos-2', viewValue: 'Thestreet.com'}
  ];

  selected = 'BBC';

}
