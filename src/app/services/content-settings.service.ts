import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentSettingsService {
  filterWord: string;

  constructor() { }

  setFilterWord(filterWord) {
    this.filterWord = filterWord;
  }

  getFilterWord() {
    return this.filterWord ? this.filterWord : null;
  }
}
