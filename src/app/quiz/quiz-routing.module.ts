import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

const routes: Routes = [
  { path: 'play/:id', component: QuizPlayComponent },
  { path: 'add', component: QuizFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
