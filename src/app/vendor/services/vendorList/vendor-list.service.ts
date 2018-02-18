import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VendorListService {

  private vendorListURL = 'http://localhost:18000/api/vendorsList';
  constructor(private http:HttpClient) { }

  getVendorList(stateCode:string){
    const url =`${this.vendorListURL}`
    return this.http.get(url)
  }

}
