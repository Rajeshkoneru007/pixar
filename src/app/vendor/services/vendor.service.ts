import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
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
    /*TODO:2.Handle Error 2.Use reslove to get data first*/  
  }

  getRegion():Observable<Region[]>{
    return this.http.get<Region[]>(this.regionURL)
    /*TODO:2.Handle Error 2.Use reslove to get data first*/  
  }
  
}