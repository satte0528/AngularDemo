import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "https://jsonplaceholder.typicode.com";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(
    private http: HttpClient
  ) { }

  testM() : Observable<any> {
    return this.http.get(apiUrl+'/posts');
    
  }
}
