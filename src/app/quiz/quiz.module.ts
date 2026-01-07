import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

@NgModule({
  declarations: [
    QuizPlayComponent,
    QuizFormComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule {}
