import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient: HttpClient) { }

  getAllBreeds() {
    console.log('Get All Breeds');
    return this.httpClient.get('https://dog.ceo/api/breeds/list/all');
  }
}
