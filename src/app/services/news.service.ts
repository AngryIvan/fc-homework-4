import { Injectable } from '@angular/core';
import { news } from './data';
@Injectable({
  providedIn: 'root'
})

export class NewsService{
  news: any[];

  constructor() { }

  getNews() {
    this.news = news;
    return this.news;
  }
}
