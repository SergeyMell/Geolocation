import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, filter, map, startWith, switchMap} from 'rxjs/operators';
import {GeocoderService} from '../services/geocoder.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  @Input('placeholder') placeholder;
  @Output('onPointSelected') pointSelected = new EventEmitter();

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private geocoderService: GeocoderService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      filter((q) => q.length > 2),
      debounceTime(300),
      switchMap(value => this._filter(value))
    );
  }

  private _filter(value: string): Observable<any[]> {
    return this.geocoderService.search(value)
      .pipe(map(response => response['features']));
  }

  displayFn(el) {
    return el && el.properties.label;
  }

  selected(point) {
    this.pointSelected.emit(point);
  }

}
