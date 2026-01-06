import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl);
  }
}
