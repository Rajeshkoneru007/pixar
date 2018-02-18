import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class RegionService {

  constructor(private http: HttpClient) { }

  private regionURL = 'http://demo8569478.mockable.io/searchByRegion';
  
  getRegion(){
    return this.http.get(this.regionURL)
    /*TODO:Use reslove to get data first*/  
  }

}
