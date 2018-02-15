import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';

import { Resolve} from '@angular/router';

import {VendorService} from '../../services/vendor.service';

import {State} from '../../model/vendor';

@Injectable()
export class StateResolverServices implements Resolve<State[]>{
    constructor(private vendorService:VendorService){}
    
    resolve():Observable<State[]>{
            return this.vendorService.getStates();
        }
}