import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router, ActivatedRoute } from '@angular/router';

import {VendorService} from '../services/vendor.service'

import {State} from '../model/vendor'
//import {Region} from '../model/vendor'

@Component({
  selector: 'app-vendor-search',
  templateUrl: './vendor-search.component.html',
  styleUrls: ['./vendor-search.component.css']
})
export class VendorSearchComponent implements OnInit {
  
  states:State[]
  //submitted: boolean = false
  //region:Region[]

  vendorSearchForm:FormGroup;
  
  constructor(private vendorService:VendorService, private fb:FormBuilder, private router: Router, private route: ActivatedRoute) {}
    
  getStates(){
    this.route.data.subscribe((data:{states:State[]}) => {
      this.states = data.states;
    });
  }

  /*getRegion(){
    let data = this.vendorService.getRegion().subscribe(data => {
      this.region = data;
      console.log(this.region);

    });
  }*/

  createVendorSearchForm(){
    this.vendorSearchForm = this.fb.group({
      state:['', Validators.required],
      /*TODO:Check whather form model binding to data model*/
    })
  }

  get state(){
    return this.vendorSearchForm.get('state');
  }

  ngOnInit(){
    this.getStates();
    //this.getRegion();
    this.createVendorSearchForm()
  }
}