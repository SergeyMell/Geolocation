import {Injectable} from '@angular/core';

import {query} from './query';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Point {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient) {
  }

  getJourney({from, to}: { from: Point, to: Point }): Observable<object> {
    const requestQuery = query
      .replace('{{FROM_LAT}}', String(from.lat))
      .replace('{{FROM_LNG}}', String(from.lng))
      .replace('{{TO_LAT}}', String(to.lat))
      .replace('{{TO_LNG}}', String(to.lng));

    return this.http.post('https://api.entur.io/journey-planner/v2/graphql', {query: requestQuery});
  }

}
