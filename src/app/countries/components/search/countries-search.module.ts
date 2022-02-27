import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesSearchComponent } from './countries-search.component';
import { AngularmaterialModule } from 'src/app/shared/angularmaterial/angularmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../../shared/loader/loader.module';

@NgModule({
  declarations: [CountriesSearchComponent],
  imports: [
    CommonModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
  exports: [CountriesSearchComponent],
})
export class CountriesSearchModule {}
