import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDataComponent } from './country-data.component';
import { ObjToArrayPipe } from '../../shared/pipes/objectToArray.pipe';

@NgModule({
  declarations: [CountryDataComponent, ObjToArrayPipe],
  imports: [CommonModule],
  exports: [CountryDataComponent],
})
export class CountryDataModule {}
