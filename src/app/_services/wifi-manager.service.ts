import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})

export class WifiManagerService {

  constructor(
    private http: HttpClient) {
  }

  text: string;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'my-auth-token',
      'Content-Disposition': 'multipart/form-data',
    })
  };

  getWiFiConfig(): Observable<Object> {
    const url = `${GlobalConstants.apiURL}/wifi`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError));
  }

  changeWiFiName(values): Observable<{}> {
    const url = `${GlobalConstants.apiURL}/wifi/`;
    return this.http.post(url, values).pipe(
      map((res: any) => {
        this.text = res;
        return this.text;
      }),
      catchError(this.handleError));
  }

  toggleMACFilter(values): Observable<{}> {
    const url = `${GlobalConstants.apiURL}/wifi/mac/filter`;
    return this.http.post(url, values).pipe(
      map((res: any) => {
        this.text = res;
        return this.text;
      }),
      catchError(this.handleError));
  }

  updateMACList(values): Observable<{}> {
    const url = `${GlobalConstants.apiURL}/wifi/mac/address`;
    return this.http.post(url, values).pipe(
      map((res: any) => {
        this.text = res;
        return this.text;
      }),
      catchError(this.handleError));
  }

  public removeMACAddress(address) {
    const url = `${GlobalConstants.apiURL}/wifi/mac/address/${address}`;
    return this.http.delete(url).pipe(
      map((res: any) => {
        return this.text;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

}
