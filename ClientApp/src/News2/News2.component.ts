import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { News } from 'src/Model/News'
import { NewsService } from 'src/NewsService';



@Component
  ({
    selector: 'list-News2',
    templateUrl: './News2.component.html',
    styleUrls: ['./News2.component.css']

  })
export class NewsListComponent implements OnInit {
  excans: News[] = [];
  excan: News = new News();
  errorMessage: String = "";

  constructor(private_route: ActivatedRoute,
    private_router: Router, private excanService: NewsService) { }

  ngOnInit() {
    this.getNewsFromServer();
  }
  async getNewsFromServer() {
    this.excanService.getNewses().subscribe((result) => (this.excans = result));
  }
}
