import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { DialogQuizTypeComponent } from '../../pages/quiz/components/dialog-quiz-type/dialog-quiz-type.component';

@Component({
  selector: 'app-header-countries',
  templateUrl: './header-countries.component.html',
  styleUrls: ['./header-countries.component.scss'],
})
export class HeaderCountriesComponent implements AfterViewInit {
  showSearch: boolean = false;
  constructor(
    public dialog: MatDialog,
    private _observer: BreakpointObserver
  ) {}
  ngAfterViewInit(): void {
    this._observer
      .observe(['(min-width: 940px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        res.matches ? (this.showSearch = true) : (this.showSearch = false);
      });
  }

  onToggle() {
    this.showSearch ? (this.showSearch = false) : (this.showSearch = true);
  }
  setQuizType(): void {
    this.dialog.open(DialogQuizTypeComponent, {
      panelClass: 'countries-dialog',
    });
  }
}
