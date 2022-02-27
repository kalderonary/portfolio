import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from '../../shared/interfaces/countries/countries.interface';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss'],
})
export class CountryDataComponent {
  @Input() data!: ICountries;
}
