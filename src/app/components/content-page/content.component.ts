import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  newsArray: any[];
  source: string;
  filterWord: string;
  limit: number;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.limit = 3;
    this.newsArray = this.news.getNews(this.limit);
    this.source = 'BBC';
    this.filterWord = '';
  }

  onSelectionChange(source) {
    this.source = source;
  }

  filterArray(status) {
    if (status) {
      this.newsArray = this.news.getNews(this.limit).filter(item => item.createdByMe);
    } else {
      this.newsArray = this.news.getNews(this.limit);
    }
  }

  increaseLimit() {
    this.limit += 3;
    this.newsArray = this.news.getNews(this.limit);
  }

}
