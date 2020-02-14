import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  @Output() showMore = new EventEmitter();

  increaseLimit() {
    this.showMore.emit();
  }
}
