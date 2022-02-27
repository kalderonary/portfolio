import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountries } from '@countries-interfaces/countries/countries.interface';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _API = environment.API;
  private _allCountries: ICountries[] = [];
  private _allCountriesSubject = new BehaviorSubject<ICountries[]>([]);
  allCountries$ = this._allCountriesSubject.asObservable();
  private _listCountriesSubject = new BehaviorSubject<ICountries[]>([]);
  listCountries$ = this._listCountriesSubject.asObservable();
  private _loadingCountriesSubject = new BehaviorSubject<boolean>(true);
  loadingCountries$ = this._loadingCountriesSubject.asObservable();

  constructor(private _http: HttpClient) {}
  getCountries(quizType: string): void {
    this._allCountries = [];
    const dataForAPI: any = {
      byWorld: 'all',
      'continent-africa': 'region/africa',
      'continent-america': 'region/america',
      'continent-asia': 'region/asia',
      'continent-europe': 'region/europe',
    };
    const quizSelectedDef = 'all';
    const quizSelected = dataForAPI[quizType] || quizSelectedDef;
    this._http
      .get<ICountries[]>(`${this._API}/${quizSelected}`)
      .pipe(
        take(1),
        map((countries) => {
          countries.map((res) => {
            let capitalsCountries = res.capital;
            capitalsCountries === undefined
              ? (capitalsCountries = ['Unknown'])
              : '';
            this._allCountries.push({
              name: res.name,
              capital: capitalsCountries,
              correctAnswer: false,
              flags: res.flags,
              region: res.region,
              subregion: res.subregion,
              languages: res.languages,
              population: res.population,
              currencies: res.currencies,
              timezones: res.timezones,
              area: res.area,
              latlng: res.latlng,
              idd: res.idd,
            });
          });
          this._allCountries.length > 0
            ? this._loadingCountriesSubject.next(false)
            : '';
          this._allCountriesSubject.next(this._allCountries);
        })
      )
      .subscribe();
  }
  filterData(valueToSearch: string) {
    this._http
      .get<ICountries[]>(`${this._API}/name/${valueToSearch}`)
      .pipe(
        take(1),
        map((countries) => {
          if (countries.length > 0) {
            this._listCountriesSubject.next(countries);
            this._loadingCountriesSubject.next(false);
          }
        }),
        catchError((error) => {
          this._listCountriesSubject.next([]); //aqui modifique
          this._loadingCountriesSubject.next(false);
          return of(error);
        })
      )
      .subscribe();
  }
}
