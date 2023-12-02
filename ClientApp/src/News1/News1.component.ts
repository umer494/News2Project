import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { INews } from 'src/Model/INews';



@Component
  ({
    selector: 'list-News1',
    templateUrl: './News1.component.html',
    styleUrls: ['./News1.component.css']

  })
export class NewsComponent {
  public excans: INews[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    baseUrl = 'https://localhost:7141/';
    http.get<INews[]>(baseUrl + 'api/Newlib').subscribe(result => {
      this.excans = result;
    }, error => console.error(error));
  }

}
