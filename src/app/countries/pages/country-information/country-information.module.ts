import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInformationComponent } from './country-information.component';
import { MapModule } from '../quiz/components/map/map.module';
import { CountryDataModule } from '../../components/data/country-data.module';
import { AngularmaterialModule } from '../../../shared/angularmaterial/angularmaterial.module';

@NgModule({
  declarations: [CountryInformationComponent],
  imports: [CommonModule, MapModule, CountryDataModule, AngularmaterialModule],
})
export class CountryInformationModule {}
