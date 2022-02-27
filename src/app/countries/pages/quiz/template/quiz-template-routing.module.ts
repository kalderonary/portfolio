import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizTemplateComponent } from './quiz-template.component';

const routes: Routes = [{ path: '', component: QuizTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByWorldRoutingModule {}
