import { Component, OnInit } from '@angular/core';

const news = [
  {
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png',
    title: 'Doge',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '14-10-1997',
    createdByMe: true
  },
  {
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png',
    title: 'Such title wow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '14-10-1997',
  },
  {
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png',
    title: 'Much news',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '14-10-1997',
  }
]
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  newsArray: any[];
  constructor() { }

  ngOnInit() {
    this.newsArray = news;
  }

  filterArray(status) {
    if (status) {
      this.newsArray = news.filter(item => item.createdByMe)
    } else {
      this.newsArray = news;
    }
  }

}
