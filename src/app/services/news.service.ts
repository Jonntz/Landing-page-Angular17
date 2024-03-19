import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interface/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url: string = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";


  constructor(private httpClient: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsResponse> {
    const data = { name, email };

    return this.httpClient.post<NewsResponse>(this.url, data);
  }
}
