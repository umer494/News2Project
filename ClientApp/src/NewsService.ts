import { Injectable } from '@angular/core';
import { News } from 'src/Model/News';
import { INews } from 'src/Model/INews';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable
  ({
    providedIn: 'root'
  })
export class NewsService {
  baseUrl = 'https://localhost:7141/api/Newlib';
  subscribe(arg0: (data: any) => void) {
    throw new Error('Method not Implemented');
  }
  constructor(private http: HttpClient) { }

  getNewses(): Observable<News[]> {
    return this.http.get<News[]>('https://localhost:7141/api/Newlib')
  }
}
