import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizs: any[] = [];
  errorMessage = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizs().subscribe({
      next: (data) => {
        this.quizs = data;
      },
      error: () => {
        this.errorMessage = 'erreur de chargement des quizs';
      }
    });
  }
}
