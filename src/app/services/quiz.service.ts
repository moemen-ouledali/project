import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:3000/quizs';

  constructor(private http: HttpClient) {}

  getQuizs() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
