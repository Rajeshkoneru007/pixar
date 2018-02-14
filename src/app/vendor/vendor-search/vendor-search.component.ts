import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  //region:Region[]

  vendorSearchForm:FormGroup;
  
  constructor(private vendorService:VendorService, private fb:FormBuilder) {}
    
  getStates(){
    let data = this.vendorService.getStates().subscribe(data => {
      this.states = data;
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
      states:'',
      /*TODO:Check whather form model binding to data model*/
    })
  }

  ngOnInit(){
    this.getStates();
    //this.getRegion();
    this.createVendorSearchForm();
  }
}