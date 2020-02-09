import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  @Input() source;

  constructor() { }

  ngOnInit() {
  }

}
