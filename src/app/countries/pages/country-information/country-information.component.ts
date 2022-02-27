import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICountryInformation } from '@countries-interfaces/quiz/quiz-results.interface';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss'],
})
export class CountryInformationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICountryInformation) {}
}
