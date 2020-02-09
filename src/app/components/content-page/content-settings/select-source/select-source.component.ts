import { Component, OnInit, EventEmitter, Output } from '@angular/core';

const sources = ["ABC News", "ABC News (AU)", "Al Jazeera English", "Ars Technica", "Associated Press", "Australian Financial Review", "Axios", "BBC News", "BBC Sport", "Bleacher Report", "Bloomberg", "Breitbart News", "Business Insider", "Business Insider (UK)", "Buzzfeed", "CBC News", "CBS News", "CNBC", "CNN", "Crypto Coins News", "Engadget", "Entertainment Weekly", "ESPN", "ESPN Cric Info", "Financial Post", "Football Italia", "Fortune", "FourFourTwo", "Fox News", "Fox Sports", "Google News"]

@Component({
  selector: 'app-select-source',
  templateUrl: './select-source.component.html',
  styleUrls: ['./select-source.component.scss']
})
export class SelectSourceComponent implements OnInit {
  @Output() selectionChange = new EventEmitter();
  sourceList: string[];
  selected = 'BBC';

  ngOnInit() {
    this.sourceList = sources;
  }

  onSelectionChange(change) {
    this.selectionChange.emit(change.value);
  }

}


