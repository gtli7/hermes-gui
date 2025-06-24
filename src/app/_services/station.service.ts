import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AlertService } from '../_services/alert.service';
// import { Observable, of } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Station } from '../interfaces/station';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService) { }
  stations: Station[];

  getStations(): Observable<Station[]> {
    const url = `${GlobalConstants.apiURL}/sys/stations`;
    return this.http.get(url).pipe(
      map((res: any) => {
        this.stations = res;
        return this.stations;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    this.stations = [];
    return throwError(() => error);
  }
}
