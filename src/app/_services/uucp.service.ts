import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AlertService } from '../_services/alert.service';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UUCPQueue } from '../interfaces/uucpqueue';

import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class UUCPService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  queue: UUCPQueue[];
  job: UUCPQueue;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'my-auth-token',
      'Content-Disposition': 'multipart/form-data',
    })
  };

  getQueue(): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/uuls`;
    return this.http.get(url).pipe(
      map((res: any) => {
        this.queue = res;
        return this.queue;
      }),
      catchError(this.handleError));
  }

  cancelTransmission(uuhost, id): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/uuk/${uuhost}/${id}`;
    return this.http.delete(url).pipe(
      map((res: any) => {
        this.queue = res;
        return this.queue;
      }),
      catchError(this.handleError));
  }

  cancelMail(uuhost, id, language): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/mail/${uuhost}/${id}/${language}`;
    return this.http.delete(url).pipe(
      map((res: any) => {
        this.queue = res;
        return this.queue;
      }),
      catchError(this.handleError));
  }

  callSystems(): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/uucall`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return this.queue;
      }),
      catchError(this.handleError));
  }

  callSystem(uuidhost): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/uucall/${uuidhost}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return this.queue;
      }),
      catchError(this.handleError));
  }

  stopTransmission(): Observable<UUCPQueue[]> {
    const url = `${GlobalConstants.apiURL}/sys/stop`
    return this.http.post(url, null).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    this.queue = [];
    return throwError(() => error);
  }

}
