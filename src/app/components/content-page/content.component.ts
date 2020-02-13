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
  constructor(private news: NewsService) { }

  ngOnInit() {
    this.newsArray = this.news.getNews();
    this.source = 'BBC';
  }

  onSelectionChange(source) {
    this.source = source;
  }

  filterArray(status) {
    if (status) {
      this.newsArray = this.news.getNews().filter(item => item.createdByMe);
    } else {
      this.newsArray = this.news.getNews();
    }
  }

}
