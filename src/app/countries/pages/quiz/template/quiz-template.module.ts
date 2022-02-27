import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByWorldRoutingModule } from './quiz-template-routing.module';
import { QuizTemplateComponent } from './quiz-template.component';
import { AngularmaterialModule } from '../../../../shared/angularmaterial/angularmaterial.module';
import { LoaderModule } from '../../../shared/loader/loader.module';

@NgModule({
  declarations: [QuizTemplateComponent],
  imports: [
    CommonModule,
    ByWorldRoutingModule,
    AngularmaterialModule,
    LoaderModule,
  ],
  exports: [QuizTemplateComponent],
})
export class QuizTemplateModule {}
