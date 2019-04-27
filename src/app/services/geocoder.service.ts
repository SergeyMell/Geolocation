import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<any> {
    return this.http.get(`https://api.entur.io/geocoder/v1/autocomplete?text=${query}&categories=NO_FILTER&lang=en`);
  }


}
