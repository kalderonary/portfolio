import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountriesService } from '@countries-services/countries.service';
import { Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CountryInformationComponent } from '../../pages/country-information/country-information.component';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { ILatLngMap } from '@countries-interfaces/quiz/quiz-results.interface';

@Component({
  selector: 'app-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.scss'],
})
export class CountriesSearchComponent implements OnDestroy {
  loadingCountry$ = this._countriesSvc.loadingCountries$;
  searchCtrl = new FormControl('');
  private _destroy$ = new Subject<unknown>();
  countriesSearch$ = this._countriesSvc.listCountries$;
  countriesSearch: ICountries[] = [];
  valueToSearch = '';
  lngLat!: ILatLngMap;
  @Output() toggle = new EventEmitter<boolean>();
  constructor(
    private _countriesSvc: CountriesService,
    public countryInformation: MatDialog
  ) {}

  ngOnInit(): void {
    this.searchCountry();
  }

  ngOnDestroy(): void {
    this._destroy$.next({});
    this._destroy$.complete();
  }
  onToggle() {
    this.toggle.emit(true);
  }

  searchCountry(): void {
    this.searchCtrl.valueChanges
      .pipe(
        map((search) => search.toLowerCase()),
        debounceTime(300),
        distinctUntilChanged(),
        tap((search: string) => {
          this._countriesSvc.filterData(search);
          this.valueToSearch = search;
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
    this.countriesSearch$.subscribe(
      (countries) => (this.countriesSearch = countries.splice(0, 4))
    );
  }
  openCountry(country: ICountries) {
    this.lngLat = {
      lat: country.latlng[0],
      lng: country.latlng[1],
    };
    this.countryInformation.open(CountryInformationComponent, {
      data: {
        country,
        lngLat: this.lngLat,
        arrLatLngItem: [this.lngLat],
      },
      panelClass: 'countries-dialog',
    });
  }
}
