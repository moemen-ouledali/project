import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
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
}
