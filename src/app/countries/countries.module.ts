import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesWrapperComponent } from './wrapper/countries-wrapper.component';
import { AngularmaterialModule } from '../shared/angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderCountriesComponent } from './components/header/header-countries.component';
import { CountriesSearchModule } from './components/search/countries-search.module';
import { CountryInformationModule } from './pages/country-information/country-information.module';

@NgModule({
  declarations: [CountriesWrapperComponent, HeaderCountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    AngularmaterialModule,
    FlexLayoutModule,
    CountryInformationModule,
    CountriesSearchModule,
  ],
})
export class CountriesModule {}
