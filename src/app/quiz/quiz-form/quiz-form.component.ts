import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent {

  form: FormGroup;
  questions: any[] = [];

  constructor(private fb: FormBuilder, private quizService: QuizService) {
    this.form = this.fb.group({
      quizTitle: ['', Validators.required],
      question: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/.*\?$/)]],
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer(),
        this.createAnswer()
      ])
    });
  }

  createAnswer() {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    });
  }

  get answers() {
    return this.form.get('answers') as FormArray;
  }

  validateQuestion() {
    const hasCorrect = this.answers.value.some((a: any) => a.isCorrect);

    if (!hasCorrect) {
      alert('il faut choisir une bonne réponse');
      return;
    }

    this.questions.push({
      question: this.form.value.question,
      answers: this.form.value.answers
    });

    this.form.get('question')?.reset();
    this.answers.clear();
    this.answers.push(this.createAnswer());
    this.answers.push(this.createAnswer());
    this.answers.push(this.createAnswer());
  }

  canFinishQuiz() {
    return this.questions.length >= 2;
  }

  finishQuiz() {
    const quiz = {
      quizTitle: this.form.value.quizTitle,
      questions: this.questions
    };

    this.quizService.addQuiz(quiz).subscribe(() => {
      this.form.reset();
      this.questions = [];
      this.answers.clear();
      this.answers.push(this.createAnswer());
      this.answers.push(this.createAnswer());
      this.answers.push(this.createAnswer());
    });
  }
}
