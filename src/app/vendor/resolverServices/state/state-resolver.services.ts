import { Injectable } from "@angular/core";

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {VendorService} from '../../services/vendor.service';

import {State} from '../../model/vendor';

@Injectable()
export class StateResolverServices implements Resolve<State[]>{
    constructor(private router: Router, private vendorService:VendorService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    
        Observable<State[]>{
            return this.vendorService.getStates();
        }

}