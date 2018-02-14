import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError} from 'rxjs/operators';

import {State} from '../model/vendor';
import {Region} from '../model/vendor';


@Injectable()
export class VendorService {
  
  private statesURL = 'api/states';
  private regionURL = 'http://demo8569478.mockable.io/searchByRegion';
  
  constructor(private http: HttpClient) { }

  getStates():Observable<State[]>{
    return this.http.get<State[]>(this.statesURL)
        .pipe(
          catchError(this.handleError)
        )
    /*TODO:Use reslove to get data first*/  
  }

  getRegion():Observable<Region[]>{
    return this.http.get<Region[]>(this.regionURL)
    .pipe(
      catchError(this.handleError)
    )
    /*TODO:Use reslove to get data first*/  
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
  
}