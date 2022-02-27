import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesWrapperComponent } from './wrapper/countries-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesWrapperComponent,

    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/countries-home/countries-home.module').then(
            (m) => m.CountriesHomeModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('./pages/quiz/quiz.module').then((m) => m.QuizModule),
      },
      { path: 'quiz/byWorld' },
      { path: 'quiz/continent-america' },
      { path: 'quiz/continent-europe' },
      { path: 'continent-africa' },
      { path: 'continent-asia' },
      { path: '**', pathMatch: 'full', redirectTo: 'quiz/byWorld' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
